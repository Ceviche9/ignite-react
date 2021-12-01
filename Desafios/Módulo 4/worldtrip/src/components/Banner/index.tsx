import {Flex, Box, Heading, Text, Image} from "@chakra-ui/react"

import {ComponentProps} from "../../protocols/ComponentsProtocols"

export const Banner = ({isMobile}: ComponentProps) => {
  if(isMobile) {
    return(
      <Flex
        align="center"
        justify="space-between"
        px={8}
        w="100%"
        h={235}
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
            mt="3"
            color="gray.50"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>
      </Flex>
    )
  }

  return(
    <Flex
      align="center"
      justify="space-between"
      px={36}
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
          mt="3"
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
  )
}