import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slides from './slides';
import SlidesResponsive from './slidesResponsive';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../../App.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);



const Slider = () => {

    const proyectos = useSelector(state => state.proyectos.proyectos )

    useEffect(() => {
        
    }, [])

    return (
        <>
        <p className="
        text-center md:text-left
        font-sans
        text-4xl 
        text-white 
        mt-16 
        mb-10" 
        >Proyectos</p>
        <div className="sliderImages mx-auto mb-20">
            <div className="esconderSwiper">
                <Slides />
            </div>
            <div className="esconderRespSwiper">
                <SlidesResponsive />
            </div>
        </div>
        </>
      );
}
 
export default Slider;



