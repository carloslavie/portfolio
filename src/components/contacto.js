import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import '../App.css';

const Contacto = () => {
    return ( 
        <div className="heroContainerContacto md:pt-40 " >
             <div className="
              bg-white bg-opacity-60 shadow-md
             md:flex sm:flex
             md:flex-row sm:flex-col
             md:justify-around sm:justify-center
             md:rounded-2xl sm:rounded-none
             md:mx-auto sm:mx-auto
             md:w-2/4 sm:w-screen
             md:items-center sm:items-center
             md:mt-10
             ">
                <div className="text-center">
                    <p className="font-sans text-6xl font-semibold text-black py-6"> 
                        <Link to={'/'} >Carlos<span className="font-sans text-6xl font-extrabold">Lavié</span> </Link> 
                    </p>
                    <img src="images/yoshadow.png" alt="imagensombra" className="object-contain 
                    md:pb-4 focus-within:sm:px-0 
                    sm:mx-auto
                    md:h-48 sm:h-24"/>
                </div>
                <div className="md:bg-black md:bg-opacity-40 md:h-60 md:w-px md:block sm:hidden">
                    
                </div>
                <div>
                    <div>
                        <div className="flex flex-row items-center justify-center md:justify-start text-2xl font-semibold mb-2"><MdEmail/> <p className="ml-2  ">carloslavie@gmail.com</p></div>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/carlos.lavie/" className="flex flex-row items-center justify-center md:justify-start text-2xl font-semibold mb-2"><FaInstagramSquare/> <p className="ml-2 ">Instagram</p></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/carlos-mar%C3%ADa-lavi%C3%A9-lahitte" className="flex flex-row items-center justify-center md:justify-start text-2xl font-semibold mb-2"><FaLinkedin/> <p className="ml-2 ">Linkedin</p></a>
                    </div>
                    <div>
                        <a href="https://github.com/carloslavie" className="flex flex-row items-center justify-center md:justify-start text-2xl font-semibold mb-2"><FaGithub/> <p className="ml-2 ">Github</p></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contacto;