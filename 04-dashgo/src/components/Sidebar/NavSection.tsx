import {Box, Stack, Text} from "@chakra-ui/react"
import { NavSectionProps } from "./protocols/SidebarProtocols"

export const NavSection = ({title, children}: NavSectionProps) => {
  return(
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
        <Stack spacing="3" mt="8" align="stretch">
          {children}
        </Stack>
    </Box>
  )
}