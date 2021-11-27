
import React, { useRef, useState } from "react";

import {Flex, Heading, Text} from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle"


SwiperCore.use([Navigation, Pagination]);

export const SwiperComponent = () => {
  return (
    <>
      <Swiper pagination navigation>
          <SwiperSlide>
            <Flex
              align="center"
              justify="center"
              direction="column"
              h={450}
              backgroundImage="url('/images/Europa.svg')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <Heading color="white">Europa</Heading>
              <Text color="white" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              align="center"
              justify="center"
              direction="column"
              h={450}
              backgroundImage="url('/images/Europa.svg')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <Heading color="white">Europa</Heading>
              <Text color="white" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              align="center"
              justify="center"
              direction="column"
              h={450}
              backgroundImage="url('/images/Europa.svg')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <Heading color="white">Europa</Heading>
              <Text color="white" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </SwiperSlide>
      </Swiper>
    </>
  )
}