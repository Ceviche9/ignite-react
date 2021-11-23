import {Flex} from "@chakra-ui/react"

import Image from "next/image"

export const Header = () => {
  return(
    <Flex
      my="3"
      as="header"
      align="center"
      justify="center" 
    >
      <Image 
        width={184}
        height={45}
        src="/images/Logo.svg" 
        alt="Logo"
      />
    </Flex>
  )
}