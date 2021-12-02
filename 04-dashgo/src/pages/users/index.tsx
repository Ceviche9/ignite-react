import { useState } from "react"
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

import Link from "next/link"
import { useUsers } from "../../services/hooks/useUsers"

export default function UsersList() {
  const [page, setPage] = useState(1)
  const {data, isLoading, isError, isFetching} = useUsers(page)

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
            <Heading size="lg" fontWeight="normal">
                Usuários
                { !isLoading && isFetching && 
                    <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.800'
                    color='pink.500'
                    size="sm" 
                    ml="4"
                  />
                }
            </Heading>
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
                  {data.users.map(user => {
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
            <Pagination
              totalCountOfRegister={data.totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
            </>
          )}

        </Box>
      </Flex>
    </Box>
  )
}