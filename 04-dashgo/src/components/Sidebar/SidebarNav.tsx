import {Stack} from "@chakra-ui/react"
import { NavSection } from "./NavSection"
import { NavLink } from "./NavLink"
import { RiContactsBookLine, RiDashboard3Line, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export const SidebarNav = () => {
  return(
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
  )
}