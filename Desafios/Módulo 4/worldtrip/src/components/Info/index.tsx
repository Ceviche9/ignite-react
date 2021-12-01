import {Box, Text} from "@chakra-ui/react"

type InfoProps = {
  totalCountries: number
  title: string
}

export const Info = ({title, totalCountries}: InfoProps) => {
  return(
    <Box
      align="center"
    >
      <Text color="yellow.400" fontSize="4xl" fontWeight="600">{totalCountries}</Text>
      <Text>{title}</Text>
    </Box>
  )
}