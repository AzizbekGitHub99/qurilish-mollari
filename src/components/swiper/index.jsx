"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./swiper.scss";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2>Акция</h2>
          <h1>«РАССРОЧКА НА ВСE стройметериалы GET IT »</h1>
          <Image
            src="/assets/images/zero.png"
            height={364}
            width={640}
            priority
            quality={100}
            alt="discount"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2>Акция</h2>
          <h1>«РАССРОЧКА НА ВСE стройметериалы GET IT »</h1>
          <Image
            src="/assets/images/zero.png"
            height={364}
            width={640}
            priority
            quality={100}
            alt="discount"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
