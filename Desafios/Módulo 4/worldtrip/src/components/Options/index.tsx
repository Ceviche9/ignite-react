import {Flex, Text} from "@chakra-ui/react"

import Image from "next/image"

export const Options = () => {
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