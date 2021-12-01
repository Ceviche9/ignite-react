import { useEffect } from "react"

import {Box,
       Flex, 
       Heading, 
       Button, 
       Icon,
       Spinner, 
       Table, 
       Thead, 
       Tr, 
       Th, 
       Checkbox,
       Tbody,
       Td,
       Text,
       useBreakpointValue
} from '@chakra-ui/react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination';

import { useQuery } from "react-query"

import Link from "next/link"

export default function UsersList() {
  const {data, isLoading, isError} = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    const users = data.users.map(user => {
      return{
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })
    
    return users
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                bgColor="pink.500"
                _hover={{
                  bgColor: "pink.700"
                }}
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ): isError ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["3", "4", "6"]} color="gray.600" w="8">
                      <Checkbox colorScheme="linkedin"/>
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => {
                    return(
                      <Tr key={user.id}>
                        <Td px={["3", "4", "6"]}  >
                          <Checkbox colorScheme="purple"/>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                        <Button 
                          as="a" 
                          size="sm" 
                          fontSize="sm" 
                          bgColor="purple.500"
                          _hover={{
                            bgColor: "purple.700",
                            cursor: "pointer"
                          }}
                          leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                        >
                          { isWideVersion ? "Editar" : null}
                        </Button>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            <Pagination/>
            </>
          )}

        </Box>
      </Flex>
    </Box>
  )
}