import {Link as ChakraLink, Icon, Text} from "@chakra-ui/react"
import { NavLinkProps } from "./protocols/SidebarProtocols"
import Link from "next/link"
import { ActiveLink } from '../ActiveLInk';

export const NavLink = ({children, icon, href, ...rest}: NavLinkProps) => {
  return ( 
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest} >
        <Icon as={icon} fontSize="20"/>
        <Text ml="3" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}