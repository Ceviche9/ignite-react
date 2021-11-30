
import {Flex, Text, Box, Heading, Stack, HStack} from "@chakra-ui/react"
import Link from "next/link"

import {Header} from "../components/Header"

import { GetServerSideProps } from "next"

import database from "../../data/database.json"

import {ContinentPathProps} from "../protocols/ContinentProtocols"

export default function ContinentPath({continent}: ContinentPathProps) {
  return(
    <Flex
      direction="column"
      h="100vh"
    >
      <Link href="/" passHref>
        <a>
          <Header/> 
        </a>
      </Link>
      <Stack
        spacing="24"
      >
        <Flex
          align="flex-end"
          justify="flex-start"
          px={36}
          paddingBottom="16"
          maxWidth={1440}
          h={500}
          backgroundImage={`url('/images/Path/${continent.bg}')`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Box>
            <Heading color="white">{continent.title}</Heading>
          </Box>
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          paddingLeft={28}
          color="gray.600"
          fontSize="xl"
        >
          <Box
            maxWidth={600}
            h={211}
          >
            {continent.about}
          </Box>
          <HStack
            justify="center"
            paddingBottom="6"
            spacing="20"
            flex={1}
            color="gray.500"
            fontWeight="500"
            fontSize="2xl"
          >
            <Box
              align="center"
            >
              <Text color="yellow.400" fontSize="4xl" fontWeight="600">{continent.totalCountries}</Text>
              <Text>Países</Text>
            </Box>
            <Box
              align="center"
            >
              <Text color="yellow.400" fontSize="4xl" fontWeight="600">{continent.totalLanguages}</Text>
              <Text>Línguas</Text>
            </Box>
            <Box
              align="center"
            >
              <Text color="yellow.400" fontSize="4xl" fontWeight="600">27</Text>
              <Text>Cidades</Text>
            </Box>
          </HStack>
        </Flex>
      </Stack>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {path} = context.params

  const continent = database.continents.find(data => path === data.path)

  if (!continent) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      continent
    }
  }
}