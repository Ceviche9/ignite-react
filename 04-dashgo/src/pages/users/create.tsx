import {Box,
        Flex,
        Heading,
        Divider,
        VStack,
        SimpleGrid,
        HStack,
        Button

      
} from '@chakra-ui/react'


import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'
import {Input} from '../../components/Form/input'

import Link from "next/link"

export default function CreateUser() {
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

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="2" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="280px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome Completo"/>
              <Input name="email" type="email" label="Email"/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="280px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Senha"/>
              <Input name="password-confirmation" type="password" label="Confirme a senha"/>
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
              <Button bgColor="pink.500" _hover={{bgColor: "pink.700"}}>Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
  }