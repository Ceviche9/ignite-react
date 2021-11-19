import {Flex, Input, Icon} from "@chakra-ui/react"
import { useRef } from "react"
import {RiSearchLine as SearchIcon} from 'react-icons/ri'

export const Searchbox = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  console.log(searchInputRef.current?.value)

  return(
      <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="20"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input 
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        px="4"
        mr="4"
        _placeholder={{color: "gray.400"}}
        ref={searchInputRef}
      />
      <Icon as={SearchIcon} fontSize="20" />
    </Flex>
  )
}