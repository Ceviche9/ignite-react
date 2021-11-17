import {Flex} from '@chakra-ui/react'

import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { Searchbox } from './Searchbox';
import {Logo} from './Logo'

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
      <Logo />
        <Searchbox />
        <Flex 
          align="center"
          ml="auto"
        >
          <NotificationNav />
          <Profile />
        </Flex>
    </Flex>
  );
}