import React, {useEffect} from 'react';
import Slider from '../components/slider/slider';
import Lenguajes from '../components/lenguajes';
import Hero from '../components/hero';
import { useSelector } from 'react-redux';



const Inicio = () => {

    const proyectos = useSelector(state => state.proyectos.proyectos )

    useEffect(() => {
        
    }, [])

    return (
        <>
        <Hero />
        <div className="h-screen 2x1:container mb-32 sm:p-0 md:mx-20 sm:m-0">         
            <Slider 
                proyectos = {proyectos}
            />
            <Lenguajes />
        </div>
        </>
     );
}
 
export default Inicio;