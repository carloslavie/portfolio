import React from 'react';
import Slider from '../components/slider/slider';
import Lenguajes from '../components/lenguajes';
import Hero from '../components/hero';
import { motion } from 'framer-motion';




const Inicio = () => {

    return (
        <>
        <Hero />
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5, duration:1}}
            className="h-screen 2x1:container mb-32 sm:p-0 md:mx-20 sm:m-0">         
            <Slider />
            <Lenguajes />
        </motion.div>
        </>
     );
}
 
export default Inicio;