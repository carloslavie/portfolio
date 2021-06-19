import React from 'react';
import Slider from '../components/slider/slider';
import Lenguajes from '../components/lenguajes';
import Hero from '../components/hero';




const Inicio = () => {

    return (
        <>
        <Hero />
        <div className="h-screen 2x1:container mb-32 sm:p-0 md:mx-20 sm:m-0">         
            <Slider />
            <Lenguajes />
        </div>
        </>
     );
}
 
export default Inicio;