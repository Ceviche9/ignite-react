import {Flex, useBreakpointValue, IconButton, Icon} from '@chakra-ui/react'

import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { Searchbox } from './Searchbox';
import {Logo} from './Logo'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export const Header = () => {
  const {onOpen} = useSidebarDrawer()

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled" // para tirar background e borda
          onClick={onOpen}
          mr="2"
        >
          
        </IconButton>
      )}
      <Logo />
        {isWideVersion && <Searchbox />}
        <Flex 
          align="center"
          ml="auto"
        >
          <NotificationNav />
          <Profile showProfileData={isWideVersion}/>
        </Flex>
    </Flex>
  );
}