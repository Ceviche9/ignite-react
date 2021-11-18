import { Box, 
        useBreakpointValue, 
        Drawer, 
        DrawerOverlay, 
        DrawerContent, 
        DrawerCloseButton,
        DrawerHeader,
        DrawerBody
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

export const Sidebar = () => {
  const {isOpen, onClose} = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay  p="4">
          <DrawerContent>
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}