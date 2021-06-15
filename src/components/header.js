import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const Header = () => {

    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        
    }, [open])

    const handleOpen = ()=>{
        if(open === false){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }
    return (
    <>
        <nav className="headerContainer" >
                <div className="font-sans text-lg font-medium  text-white text-center py-5">        
                    <Link to={"/"} className="hover:text-yellow-500">Inicio</Link>
                    <Link to={"proyectos"} className="ml-28 hover:text-yellow-500">Github</Link>
                    <Link to={"about"} className="ml-28 hover:text-yellow-500 ">Currículum</Link>
                    <Link to={"contacto"} className="ml-28 hover:text-yellow-500 ">Contacto</Link>
                    {/* <Link to={"about"} className="ml-28 hover:text-yellow-500 ">Github</Link> */}
                </div>                
        </nav>
        <div className="text-white text-right m-3 md:hidden">
            <button onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        {open ? <Sidebar/> : null}
        
        </>
        
        
     );
}
 
export default Header;
