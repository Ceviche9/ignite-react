import {Box, Stack} from '@chakra-ui/react'
import { RiContactsBookLine, RiDashboard3Line, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const Sidebar = () => {
  return(
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL" >
          <NavLink icon={RiDashboard3Line}>Dashboard</NavLink>
          <NavLink icon={RiContactsBookLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
         <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}