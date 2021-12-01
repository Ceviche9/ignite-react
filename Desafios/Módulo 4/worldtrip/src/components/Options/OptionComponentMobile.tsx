import {HStack, Text} from "@chakra-ui/react"
import { MobileProps } from "./protocols/OptionsComponentProtocols"

export const OptionComponentMobile = ({title}: MobileProps) => {
  return(
    <HStack
      textAlign="center"
      color="gray.500"
      fontWeight="500"
      _hover={{
        color: "gray.800",
        fontWeight: "500",
        cursor: "pointer"
      }}
    >
      <Text fontSize="6xl" color="yellow.400" mb="6">.</Text>
      <Text fontSize="2xl">{title}</Text>
    </HStack>
  )
}