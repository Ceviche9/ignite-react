import {Flex, Box, Text, Avatar} from "@chakra-ui/react"

export const Profile = () => {
  return(
    <Flex
    align="center"
  >
    <Box
      mr="4"
      textAlign="right"
    >
      <Text>Tundê Cavalcante</Text>
      <Text 
        color="gray.300" 
        fontSize="small"
        >
          ayotunde_sales@hotmail.com
      </Text>
    </Box>
    <Avatar size="md" name="Tundê Cavalcante" src="https:github.com/ceviche9.png"/>
  </Flex>
  )
}