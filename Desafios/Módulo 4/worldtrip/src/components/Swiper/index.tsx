
import React, { useRef, useState } from "react";

import {Flex, Heading, Text} from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"


SwiperCore.use([Navigation, Pagination]);

export const SwiperComponent = () => {
  return (
    <>
      <Swiper navigation={true}>
        <Flex>
          <SwiperSlide>
            <Flex
              align="center"
              justify="center"
              direction="column"
              w={1240}
              h={450}
              p="auto"
              backgroundImage="url('/images/Europa.svg')"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <Heading color="white">Europa</Heading>
              <Text color="white" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Flex>
      </Swiper>
    </>
  )
}