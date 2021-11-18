import {Flex, useBreakpointValue} from '@chakra-ui/react'

import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { Searchbox } from './Searchbox';
import {Logo} from './Logo'

export const Header = () => {

  // Baseado na largura da tela, um dos valores será retornado
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
      <Logo />
        {isWideVersion && <Searchbox />}
        <Flex 
          align="center"
          ml="auto"
        >
          <NotificationNav />
          <Profile showProfileData/>
        </Flex>
    </Flex>
  );
}