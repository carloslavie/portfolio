import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../App.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);



const Slider = () => {
    return (
        <>
        <p className="font-sans text-4xl text-white mt-16 mb-10">Proyectos</p>
        <div className="sliderImages mx-auto mb-20">
        <Swiper 
            slidesPerView={6} 
            spaceBetween={10} 
            slidesPerGroup={3} 
            loop={true} 
            loopFillGroupWithBlank={false} 
            // pagination={{
            //     "clickable": true
            // }} 
            navigation={true} 
            className="mySwiper">

        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://reverent-lumiere-fe3899.netlify.app/"> <img src='/images/slider/vet.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://fervent-davinci-78d215.netlify.app/"> <img src='/images/slider/pres.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://ecstatic-goldstine-516f3f.netlify.app/"> <img src='/images/slider/segu.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://confident-hawking-74783b.netlify.app/"> <img src='/images/slider/break.png' alt="imagenslide"/> </a> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://hardcore-brahmagupta-99a2b8.netlify.app/"> <img src='/images/slider/clima.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://admiring-lewin-adc7eb.netlify.app/"> <img src='/images/slider/cripto.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://angry-knuth-6bc83f.netlify.app/"> <img src='/images/slider/news.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://xenodochial-jackson-567d13.netlify.app/"> <img src='/images/slider/fotos.png' alt="imagenslide"/> </a> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://dazzling-poitras-34d2ae.netlify.app/"> <img src='/images/slider/sound.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://trusting-brahmagupta-11bdff.netlify.app/"> <img src='/images/slider/drinks.png' alt="imagenslide"/> </a> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://wonderful-allen-522a72.netlify.app/"> <img src='/images/slider/tasks.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://trusting-bohr-800337.netlify.app/"> <img src='/images/slider/phunt.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://nervous-sinoussi-3389d5.netlify.app/"> <img src='/images/slider/gats.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://eager-goodall-697f02.netlify.app/"> <img src='/images/slider/chall1.png' alt="imagenslide"/> </a> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://naughty-murdock-2695ca.netlify.app/"> <img src='/images/slider/braices.png' alt="imagenslide"/> </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-size">
                <a href="https://zen-feynman-be75bd.netlify.app/"> <img src='/images/slider/chall2.png' alt="imagenslide"/> </a> 
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </>
      );
}
 
export default Slider;



