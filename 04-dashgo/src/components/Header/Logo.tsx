import {Text} from "@chakra-ui/react"

export const Logo = () => {
  return(
    <Text 
      fontSize="3xl" 
      fontWeight="bold"
      letterSpacing="tight"
    >
      dashgo
      <Text 
        as="span" 
        color="pink.500" 
        ml="1"
        fontSize="3xl"
        >
          .
      </Text>
    </Text>
  )
}