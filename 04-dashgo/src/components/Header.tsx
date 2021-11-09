import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine as SearchIcon, RiUserAddLine} from 'react-icons/ri'

export const Header = () => {
  return(
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1100}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text 
        fontSize="3xl" 
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
      </Text>
      <Text 
        as="span" 
        color="pink.500" 
        ml="1"
        fontSize="3xl"
        >
          .
        </Text>
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
          _placeholder={{color: "gray.400"}}
          px="4"
          mr="4"
        />
        <Icon as={SearchIcon} fontSize="20" />
        </Flex>
        <Flex 
          align="center"
          ml="auto"
        >
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
        </Flex>
    </Flex>
  );
}