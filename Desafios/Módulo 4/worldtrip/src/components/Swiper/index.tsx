
import React, { useRef, useState } from "react";

import {Flex, Heading, Text} from "@chakra-ui/react"

import LInk from "next/link"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle"
import { ContinentProps } from "../../protocols/SwiperProtocols";

SwiperCore.use([Navigation, Pagination]);

type SwiperCarrouselProps = {
  data: ContinentProps[],
  isMobile: boolean
}

export const SwiperCarrousel = ({data, isMobile}: SwiperCarrouselProps) => {
  return (
    <>
      <Swiper 
        pagination 
        navigation
      >
        {data.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
              <LInk href={continent.path}>
                  <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    h={isMobile ? 350 : 480}
                    backgroundImage={continent.bg ? `url('/images/Continent/${continent.bg}')` : null}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    _hover={{
                      cursor: "pointer"
                    }}
                  >
                    <Heading color="white" fontSize={["2xl", "3xl"]}>{continent.title}</Heading>
                    <Text color="white" fontSize={["xl","2xl"]}>{continent.description}</Text>
                  </Flex>
              </LInk>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}