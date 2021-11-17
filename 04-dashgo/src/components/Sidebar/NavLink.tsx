import {Link, Icon, Text} from "@chakra-ui/react"
import { NavLinkProps } from "./protocols/SidebarProtocols"

export const NavLink = ({children, icon, ...rest}: NavLinkProps) => {
  return ( 
    <Link display="flex" align="center" {...rest} >
      <Icon as={icon} fontSize="20"/>
      <Text ml="3" fontWeight="medium">{children}</Text>
    </Link>
  )
}