
import {Flex, Text, Box, Heading, Stack, HStack, Grid, GridItem, Image} from "@chakra-ui/react"
import Link from "next/link"

import { Header } from "../components/Header"
import { Info } from "../components/Info"

import { GetServerSideProps } from "next"

import database from "../../data/database.json"

import {ContinentPathProps} from "../protocols/ContinentProtocols"

export default function ContinentPath({continent, countries}: ContinentPathProps) {
  
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
      <Stack spacing="50px" >
        <Flex
          align={["center", "flex-end"]}
          justify={["center", "flex-start"]}
          px={[0, 36]}
          paddingBottom={["", "16"]}
          maxWidth={1440}
          h={[300, 500]}
          backgroundImage={`url('/images/Path/${continent.bg}')`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Box>
            <Heading color="white" fontSize="4xl">{continent.title}</Heading>
          </Box>
        </Flex>
        <Stack
          direction={["column", "row"]}
          px={[5, 28]}
          color="gray.600"
          fontSize="xl"
        >
          <Box
            maxWidth={500}
            textAlign="justify"
          >
            {continent.about}
          </Box>
          <HStack
            justify="center"
            paddingBottom="7"
            spacing="20"
            flex={1}
            color="gray.600"
            fontWeight="500"
            fontSize="xl"
          >
            <Info title="Países" totalCountries={continent.totalCountries}/>
            <Info title="Línguas" totalCountries={continent.totalLanguages}/>
            <Info title="Cidades + 100..." totalCountries={27}/>
          </HStack>
        </Stack>
        <Text 
          px={[5, 28]}
          fontWeight="500" 
          fontSize={["3xl", "4xl"]} 
          color="gray.600"
        >
          Cidades + 100
        </Text>
        <Flex
          px={[10, 5]}
          align="center"
          justify="center"
        >
        <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
          gap={9}
        >
          {countries.map(data => {
            return (
              <GridItem 
                key={data.id}
                _hover={{
                  cursor: "pointer"
                }}
              >
                <Flex
                  flexDirection="column"
                  borderBottomWidth="thin"
                  borderColor="yellow.400"
                >
                  <Image
                    width="100%"
                    height={173}
                    src={`/images/country/${data.bg}`} 
                    alt="country"
                  />
                  <Box
                    pt="4"
                    px="5"
                    w={256}
                    h={94}
                    borderColor="yellow.400"
                    borderLeftWidth="thin"
                    borderRightWidth="thin"
                  >
                    <HStack
                      justify="space-between"
                    >
                      <Stack spacing="1">
                        <Text fontWeight="600" color="gray.700">{data.name}</Text>
                        <Text fontWeight="400" color="gray.400">{data.country.name}</Text>
                      </Stack>
                      <Image
                        objectFit="cover"
                        w="30px"
                        h="30px"
                        borderRadius="50%"
                        src={`/images/flag/${data.country.flag}`}
                        alt="flag"
                      />
                    </HStack>
                  </Box>
                </Flex>
              </GridItem>
            )
          })}
        </Grid>
        </Flex>
      </Stack>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {path} = context.params

  const continent = database.continents.find(data => path === data.path)

  const countries = database.cities

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
      continent,
      countries
    }
  }
}