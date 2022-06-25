import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './carousel.scss'
// import required modules
import { Autoplay, Parallax } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"

          data-swiper-parallax="-15%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Las mejores marcas
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Envíos en 24hs
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Desde 1973 en el rubro
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;