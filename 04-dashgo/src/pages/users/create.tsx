import {Box,
        Flex,
        Heading,
        Divider,
        VStack,
        SimpleGrid,
        HStack,
        Button

      
} from '@chakra-ui/react'

import {SubmitHandler, useForm} from "react-hook-form"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup/dist/yup"

import {useMutation} from "react-query"
import { api } from '../../services/api'

import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'
import {Input} from '../../components/Form/input'

import Link from "next/link"
import { queryClient } from '../../services/queryClient'
import { useRouter } from 'next/router';

type CreateUserFormDataProps = {
  name: string
  email: string
  password: string
  password_confirmation: string 
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Campo nome obrigatório'),
  email: yup.string().required('Campo email obrigatório').email('Email inválido'),
  password: yup.string().required('Campo senha obrigatório').min(6, 'No mínimo 6 caracteres'),
  // Para verificar se as senhas são identicas.
  password_confirmation: yup.string().oneOf([
    null, // Esse campo pode está vazio
    yup.ref('password') // Caso esteja preenchido, o valor tem que ser igual ao do campo password.
  ], 'As senhas precisam ser iguais')

})

export default function CreateUser() {
  const router = useRouter()
  // Com o useMutation é possivel monitorar o estado desa chamada
  const createUser = useMutation(async (user: CreateUserFormDataProps) => {
    const response = await api.post('/users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })
  }, {
    // Para tornar as páginas inválidas (desatualizadas)
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const {errors} = formState

  const handleCreateUser: SubmitHandler<CreateUserFormDataProps> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return(
    <Box>
      <Header />
      <Flex 
        w="100%"
        my="6"
        maxWidth={1100}
        mx="auto"
        px="6"
        >   
        <Sidebar/>

        <Box 
          as="form" 
          flex="1" 
          p={["6", "8"]}
          borderRadius={8} 
          bg="gray.800"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="2" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="280px" spacing={["6", "8"]} w="100%">
              <Input 
                name="name" 
                label="Nome Completo" 
                {...register("name")}
                error={errors.name}
              />
              <Input 
                name="email" 
                type="email" 
                label="Email" 
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="280px" spacing={["6", "8"]} w="100%">
              <Input 
                name="password" 
                type="password" 
                label="Senha" 
                {...register("password")}
                error={errors.password}
              />
              <Input 
                name="password_confirmation" 
                type="password" 
                label="Confirme a senha" 
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack> 
          
          <Flex
            mt="8"
            justify="flex-end"
          >
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" bgColor="gray.700">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                bgColor="pink.500"
                _hover={{bgColor: "pink.700"}}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
  }