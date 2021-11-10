import {Box, Stack, Text, Icon, Link} from '@chakra-ui/react'
import { RiContactsBookLine, RiDashboard3Line, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export const Sidebar = () => {
  return(
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
            <Stack spacing="3" mt="8" align="stretch">
              <Link display="flex" align="center">
                <Icon as={RiDashboard3Line} fontSize="20"/>
                <Text ml="3" fontWeight="medium">Dashboard</Text>
              </Link>
              <Link display="flex" align="center">
                <Icon as={RiContactsBookLine} fontSize="20"/>
                <Text ml="3" fontWeight="medium">Usuários</Text>
              </Link>
            </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
            <Stack spacing="3" mt="8" align="stretch">
              <Link display="flex" align="center">
                <Icon as={RiInputMethodLine} fontSize="20"/>
                <Text ml="3" fontWeight="medium">Formulários</Text>
              </Link>
              <Link display="flex" align="center">
                <Icon as={RiGitMergeLine} fontSize="20"/>
                <Text ml="3" fontWeight="medium">Automação</Text>
              </Link>
            </Stack>
        </Box>
      </Stack>
    </Box>
  )
}