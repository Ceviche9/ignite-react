import {Flex, Text, HStack, Heading} from "@chakra-ui/react"

import Image from "next/image"

import { ComponentProps } from "../../protocols/ComponentsProtocols"

export const Options = ({isMobile}: ComponentProps) => {

  if(isMobile) {
    return(
      <Flex
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <HStack 
          spacing="100px"
        >
          <HStack
            textAlign="center"
            color="gray.500"
            fontWeight="500"
            _hover={{
              color: "gray.800",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            <Text fontSize="6xl" color="yellow.400" mb="6">.</Text>
            <Text fontSize="2xl">Vida noturna</Text>
          </HStack>
          <HStack
            spacing="1"
            color="gray.500"
            fontWeight="500"
            _hover={{
              color: "gray.800",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            <Text fontSize="6xl" color="yellow.400" mb="6">.</Text>
            <Text fontSize="2xl">Praia</Text>
          </HStack>
        </HStack>
        <HStack spacing="100px">
          <HStack
            spacing="1"
            color="gray.500"
            fontWeight="500"
            _hover={{
              color: "gray.800",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            <Text fontSize="6xl" color="yellow.400" mb="6">.</Text>
            <Text fontSize="2xl">Moderno</Text>
          </HStack>
          <HStack
            spacing="1"
            color="gray.500"
            fontWeight="500"
            _hover={{
              color: "gray.800",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            <Text fontSize="6xl" color="yellow.400" mb="6">.</Text>
            <Text fontSize="2xl">Clássico</Text>
          </HStack>
        </HStack>
        <HStack
          spacing="1"
          color="gray.500"
          fontWeight="500"
          _hover={{
            color: "gray.800",
            fontWeight: "500",
            cursor: "pointer"
          }}
        >
          <Text fontSize="6xl" color="yellow.400" mb="6">.</Text>
          <Text fontSize="2xl">E mais...</Text>
        </HStack>
      </Flex>
    )
  }


  return(
    <Flex
      my="28"
      align="center"
      justify="space-evenly"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        color="gray.500"
        fontWeight="bold"
        _hover={{
          color: "gray.800",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <Image
          width={85}
          height={85}
          src="/images/night.svg"
          alt="Option"
        />
        <Text mt="6" >Vida noturna</Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        color="gray.500"
        fontWeight="bold"
        _hover={{
          color: "gray.800",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <Image
          width={85}
          height={85}
          src="/images/beach.svg"
          alt="Option"
        />
        <Text mt="6">Praia</Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        color="gray.500"
        fontWeight="bold"
        _hover={{
          color: "gray.800",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <Image
          width={85}
          height={85}
          src="/images/modern.svg"
          alt="Option"
        />
        <Text mt="6">Moderno</Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        color="gray.500"
        fontWeight="bold"
        _hover={{
          color: "gray.800",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <Image
          width={85}
          height={85}
          src="/images/classic.svg"
          alt="Option"
        />
        <Text mt="6">Clássico</Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        color="gray.500"
        fontWeight="bold"
        _hover={{
          color: "gray.800",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <Image
          width={85}
          height={85}
          src="/images/more.svg"
          alt="Option"
        />
        <Text mt="6">E mais...</Text>
      </Flex>
    </Flex>
  )
}