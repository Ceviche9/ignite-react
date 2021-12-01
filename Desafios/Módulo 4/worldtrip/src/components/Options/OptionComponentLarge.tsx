import {Flex, Text} from "@chakra-ui/react"
import Image from "next/image"

import { LargeProps } from "./protocols/OptionsComponentProtocols"

export const OptionComponentLarge = ({image, title}: LargeProps) => {
  return(
    <Flex
      direction="column"
      align="center"
      justify="center"
      color="gray.500"
      fontWeight="bold"
      _hover={{
        color: "gray.800",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      <Image
        width={85}
        height={85}
        src={`/images/${image}.svg`}
        alt="Option"
      />
      <Text mt="6" >{title}</Text>
    </Flex>
  )
}