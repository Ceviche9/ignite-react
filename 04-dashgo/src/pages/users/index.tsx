import {Box,
       Flex, 
       Heading, 
       Button, 
       Icon, 
       Table, 
       Thead, 
       Tr, 
       Th, 
       Checkbox,
       Tbody,
       Td,
       Text
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination';

export default function UsersList() {
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

          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.600" w="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6" >
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Tundê Cavalcante</Text>
                    <Text fontSize="sm" color="gray.300">ayo@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>04/11/2021</Td>
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
                  Editar
                </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6" >
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Tundê Cavalcante</Text>
                    <Text fontSize="sm" color="gray.300">ayo@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>04/11/2021</Td>
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
                  Editar
                </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6" >
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Tundê Cavalcante</Text>
                    <Text fontSize="sm" color="gray.300">ayo@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>04/11/2021</Td>
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
                  Editar
                </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
  )
}