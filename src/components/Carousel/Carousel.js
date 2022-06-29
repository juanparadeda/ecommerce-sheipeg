import React from "react";
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
  const titles = ['SHEIPEG', 'Tu Tienda de Fotografía', 'Las Mejores Marcas', 'Desde 1973 en el Rubro']
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
        >
        </div>
        {titles.map((title, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="title" data-swiper-parallax="-300">
                {title}
              </div>
            </SwiperSlide>)
        })}
      </Swiper>
    </>
  );
}

export default Carousel;