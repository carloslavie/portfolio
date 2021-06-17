import React from 'react';
import { SiTailwindcss } from 'react-icons/si';

const Lenguajes = () => {
    return ( 
        <>
        <p className="text-center md:text-left font-sans text-4xl text-white mt-16 mb-10">Skills</p>
        <div className="flex md:flex-row flex-wrap items-center justify-center md:justify-start mx-auto  mb-40 md:pb-0 pb-20" >
            <div>
                <img src="images/react.png" alt="logoReact" className="md:w-40 w-32"/>
            </div>
            <div className="mx-5">
                <img src="images/jscript.png" alt="logojs" className="md:w-20 w-14"/>
            </div>
            <div className="mx-5">
                <img src="images/csslogo.png" alt="logocss" className="md:w-20 w-14"/>
            </div>
            <div className="mx-5">
                <img src="images/htmllogo.png" alt="logohtml" className="md:w-20 w-14"/>
            </div>
            <div className="mx-5"> 
                <img src="images/nodelogo.png" alt="logonode" className="md:w-28 w-20"/>
            </div>
            <div className="mx-5">
                <img src="images/gitlogo.png" alt="logogit" className="md:w-14 w-14"/>
            </div>
            <div className="mx-5">
                <SiTailwindcss className="md:text-6xl text-5xl text-white"/>
            </div>
        </div>
        </>
     );
}
 
export default Lenguajes;