import { Flex, Button, Stack } from '@chakra-ui/react'
import {SubmitHandler, useForm} from "react-hook-form"

import {Input} from '../components/Form/input'

type SingInFormData = {
  email: string
  password: string
}
// const {errors} = formState
export default function SingIn() {
  const {register, handleSubmit, formState} = useForm()

  const handleSingIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh"
      align="center"
      justify="center" 
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSingIn)}
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="Email" {...register("email")}/>
          <Input type="password" name="password" label="Password" {...register("password")} />
        </Stack>
        <Button 
          type="submit" 
          mt="6" 
          bgColor="pink.500"
          size="lg"
          isLoading={formState.isSubmitting}
          _hover={{
            bgColor: "pink.700",
            cursor: "pointer"
          }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
