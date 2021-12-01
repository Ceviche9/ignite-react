import {Flex, HStack, VStack} from "@chakra-ui/react"

import {OptionComponentLarge} from "./OptionComponentLarge"
import {OptionComponentMobile} from "./OptionComponentMobile"

import { ComponentProps } from "../../protocols/ComponentsProtocols"

export const Options = ({isMobile}: ComponentProps) => {

  if(isMobile) {
    return(
      <VStack spacing="0">
        <HStack spacing="80px">

          <OptionComponentMobile title="Vida noturna"/>
          <OptionComponentMobile title="Praia"/>

        </HStack>
        <HStack spacing="80px">

          <OptionComponentMobile title="Moderno"/>
          <OptionComponentMobile title="Clássico"/>

        </HStack>

        <OptionComponentMobile title="E mais..."/>

      </VStack>
    )
  }


  return(
    <Flex
      my="28"
      align="center"
      justify="space-evenly"
    >
      <OptionComponentLarge title="Vida noturna" image="night"/>
      <OptionComponentLarge title="Praia" image="beach"/>
      <OptionComponentLarge title="Moderno" image="modern"/>
      <OptionComponentLarge title="Clássico" image="classic"/>
      <OptionComponentLarge title="E mais..." image="more"/>
    </Flex>
  )
}