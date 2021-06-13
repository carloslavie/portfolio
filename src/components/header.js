import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="headerContainer" >
                <div className="font-sans text-lg font-medium  text-white text-center py-5">        
                    <Link to={"/"} className="hover:text-yellow-500">Inicio</Link>
                    <Link to={"about"} className="ml-28 hover:text-yellow-500 ">Sobre mí</Link>
                    <Link to={"about"} className="ml-28 hover:text-yellow-500">Proyectos</Link>
                    <Link to={"about"} className="ml-28 hover:text-yellow-500 ">Github</Link>
                    <Link to={"about"} className="ml-28 hover:text-yellow-500 ">Contacto</Link>
                </div>
        </nav>
     );
}
 
export default Header;
<h1>Header</h1>