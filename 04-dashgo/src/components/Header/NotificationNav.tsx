import {HStack, Icon} from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"

export const NotificationNav = () => {
  return(
    <HStack 
    spacing="8"
    mx="8"
    pr="0"
    px="8"
    color="gray.300"
    borderRightWidth={1}
    borderColor="gray.700"


  >
    <Icon as={RiNotificationLine} fontSize="20"/>
    <Icon as={RiUserAddLine} fontSize="20"/>
  </HStack>
  )
}