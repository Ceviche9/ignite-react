import { Flex, Button, Stack } from '@chakra-ui/react'

import {Input} from '../components/Form/input'

export default function SingIn() {
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
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="Email"/>
          <Input type="password" name="password" label="Password"/>
        </Stack>
        <Button 
          type="submit" 
          mt="6" 
          bgColor="pink.500"
          size="lg"
          _hover={{
            bgColor: "pink.600"
          }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
