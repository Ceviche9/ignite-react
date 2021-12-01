import {Flex, Text, Box, Heading, Divider, Stack, useBreakpointValue} from "@chakra-ui/react"

import { Header } from "../components/Header"
import { Options } from "../components/Options"
import {Banner} from "../components/Banner"

import { SwiperCarrousel } from '../components/Swiper/index';
import { GetStaticProps } from "next";


import database from "../../data/database.json"
import { ContinentProps } from "../protocols/SwiperProtocols";


type HomeProps = {
  continents: ContinentProps[]
}

export default function Home({continents}: HomeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })


  return (
    <Flex
      direction="column"
      h="100vh"
      w="100%"
      mb={25}
    >
      <Header/> 
      <Stack
        spacing={["10px", "24"]}
      >
        <Banner isMobile={isMobile}/>

        <Options isMobile={isMobile}/>

        <Divider my="2" borderColor="gray.900" w="16" alignSelf="center" border="23"/>
        
        <Stack py="5">
          <Heading
            as="h2"
            fontSize={["2xl", "4xl"]}
            color="gray.600"
            fontWeight="500"
            textAlign="center"
          >
            Vamos nessa ? <br/>
            Então escolha seu continente
          </Heading>
          <Box
            paddingBottom={25}
          >
            <Flex
              maxWidth={1310}
              paddingX={["","10"]}
              mt="6"
              mx="auto"
            >
              <SwiperCarrousel data={continents} isMobile={isMobile}/>
            </Flex>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const continents: ContinentProps[] = database.continents

  return {
    props: {
      continents
    }
  }
}