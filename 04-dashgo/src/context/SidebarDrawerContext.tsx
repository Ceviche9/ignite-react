import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { createContext, ReactNode, useContext } from "react"

type SidebarDrawerProps = {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({children}: SidebarDrawerProps) => {
  const disclosure = useDisclosure()

  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)