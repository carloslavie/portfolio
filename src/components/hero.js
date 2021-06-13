import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Hero = () => {
    return ( 
        <div className="heroContainer pt-40" >
             <div className="flex flex-row justify-around items-center bg-white bg-opacity-60 rounded-2xl w-2/4 mx-auto shadow-md">
                <div className="text-center">
                    <p className="font-sans text-6xl font-semibold text-black py-6"> 
                        <Link to={'/'} >Carlos<span className="font-sans text-6xl font-extrabold">Lavié</span> </Link> 
                    </p>
                    <img src="images/yoshadow.png" className="object-contain h-48 pb-4"/>
                </div>
                <div className="bg-black bg-opacity-40 h-60 w-px">
                    
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