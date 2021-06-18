import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    return ( 
        <div className=" border-t-2 border-t-red py-10">
            <div className="flex flex-col md:flex-row  justify-around w-2/3 mx-auto">
                <div className="">
                    <div className="flex flex-row items-center justify-center text-md font-semibold mb-2 text-white"><MdEmail/> <p className="ml-2  ">carloslavie@gmail.com</p></div>
                </div>
                <div className="">
                    <a href="https://www.instagram.com/carlos.lavie/" className="flex flex-row items-center justify-center text-md font-semibold mb-2 text-white"><FaInstagramSquare/> <p className="ml-2 ">Instagram</p></a>
                </div>
                <div className="">
                    <a href="https://www.linkedin.com/in/carlos-mar%C3%ADa-lavi%C3%A9-lahitte" className="flex flex-row items-center justify-center text-md font-semibold mb-2 text-white"><FaLinkedin/> <p className="ml-2 ">Linkedin</p></a>
                </div>
                <div className="">
                    <a href="https://github.com/carloslavie" className="flex flex-row items-center justify-center text-md font-semibold mb-2 text-white"><FaGithub/> <p className="ml-2 ">Github</p></a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer; 