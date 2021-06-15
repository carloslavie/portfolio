import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


const SlidesResponsive = () => {

    const proyectos = useSelector(state => state.proyectos.proyectos )

    useEffect(() => {
        
    }, [])

    return ( 
        <Swiper 
            slidesPerView={2} 
            spaceBetween={10} 
            slidesPerGroup={3} 
            loop={true} 
            loopFillGroupWithBlank={false} 
            // pagination={{
            //     "clickable": true
            // }} 
            navigation={true} 
            className="mySwiper">

        {proyectos.map(proyecto=>(
            <SwiperSlide>
                <div className="swiper-size">
                    <a href={proyecto.url}> <img src={proyecto.img} alt="imagenslide"/> </a>
                </div>
            </SwiperSlide>
        ))}
         
      </Swiper>
     );
}
 
export default SlidesResponsive;