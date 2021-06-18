import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Hero = () => {
    return ( 
        <div className="heroContainer md:pt-40 pt-3.5" >
             <div className="
              bg-white bg-opacity-60 shadow-md
             md:flex sm:flex
             md:flex-row sm:flex-col
             md:justify-around sm:justify-center
             md:rounded-2xl sm:rounded-none
             md:mx-auto sm:mx-auto
             md:w-2/4 sm:w-screen
             md:items-center sm:items-center">
                <div className="text-center">
                    <p className="font-sans text-6xl font-semibold text-black py-6"> 
                        <Link to={'/'} >Carlos<span className="font-sans text-6xl font-extrabold">Lavié</span> </Link> 
                    </p>
                    <div className="box">
                        <img src="images/yoshadow.png" alt="imagenconsombra"/>
                        <img src="images/yo2.png" className="hover-img" alt="imagensinsombra"/>
                    </div>
                    {/* <img src="images/yoshadow.png" className="object-contain 
                    md:pb-4 focus-within:sm:px-0 
                    sm:mx-auto
                    md:h-48 sm:h-24"/> */}
                </div>
                <div className="md:bg-black md:bg-opacity-40 md:h-60 md:w-px md:block sm:hidden">
                    
                </div>
                <div>
                   <p className="text-3xl text-center font-semibold">Full Stack Developer</p>
                   <p className="font-sans text-5xl text-center font-extrabold">React JS</p>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;