
import React, { useRef, useState } from "react";

import {Flex, Heading, Text} from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle"
import { ContinentProps } from "../../protocols/SwiperProtocols";

SwiperCore.use([Navigation, Pagination]);

type SwiperCarrouselProps = {
  data: ContinentProps[]
}

export const SwiperCarrousel = ({data}: SwiperCarrouselProps) => {
  return (
    <>
      <Swiper 
        pagination 
        navigation
      >
        {data.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
                <Flex
                  align="center"
                  justify="center"
                  direction="column"
                  h={480}
                  backgroundImage={continent.bg ? `url('/images/Country/${continent.bg}')` : null}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                >
                  <Heading color="white">{continent.title}</Heading>
                  <Text color="white" fontSize="2xl">{continent.description}</Text>
                </Flex>
              </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}