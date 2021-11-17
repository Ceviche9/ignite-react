import { ElementType, ReactNode } from "toasted-notes/node_modules/@types/react";
import {LinkProps as ChakraLinkProps} from "@chakra-ui/react"

export type NavSectionProps = {
  title: string
  children: ReactNode
}

export interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType
  children: string
}