import {Flex, Text, Box, Heading, Divider} from "@chakra-ui/react"

import { Header } from "../components/Header"
import { Options } from "../components/Options"

import Image from "next/image"
import { SwiperComponent } from '../components/Swiper/index';

export default function Home() {
  return (
    <Flex
      direction="column"
      h="100vh"
      mb={25}
    >
      <Header/>
      <Flex
        align="center"
        justify="space-between"
        px={32}
        w="100%"
        h={335}
        backgroundImage="url('/images/Background.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box>
          <Box
            color="gray.50"
          >
            <Heading
              fontWeight="500"
              mb="4"
            >
              5 Continentes,
            </Heading>
            <Heading
              fontWeight="500"
            >
              infinitas possibilidades.
            </Heading>
          </Box>
          <Text
            mt="4"
            color="gray.50"
          >
          Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
          </Text>
        </Box>
        <Box
          mt={32}
        >
          <Image 
            width={417}
            height={270}
            src="/images/Airplane.svg" 
            alt="Avião"
          />
        </Box>
      </Flex>
      <Options />
      <Divider my="2" borderColor="gray.900" w="16" alignSelf="center" border="23"/>
      <Heading
        mt="14"
        color="gray.600"
        fontWeight="500"
        alignSelf="center"
      >
        Vamos nessa ?
      </Heading>
      <Heading
        mt="2"
        color="gray.600"
        fontWeight="500"
        alignSelf="center"
      >
        Então escolha seu continente
      </Heading>
      <Box
        paddingBottom={25}
      >
        <Flex
          maxWidth={1010}
          mt="6"
          mx="auto"
        >
          <SwiperComponent />
        </Flex>
      </Box>
    </Flex>
  )
}
