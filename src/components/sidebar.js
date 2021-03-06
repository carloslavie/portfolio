import React  from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Sidebar = ({traerOpen}) => {

    

    return ( 
        <>
            <aside className="bgaside bg-opacity-90 transition delay-300 duration-300 -translate-x-full fixed left-0 top-0 z-50 h-full w-72 md:hidden sm:block shadow-xl ">
                <div className="pt-6 text-center border-b border-t">
                    <p className="text-yellow-500 text-4xl font-bold">
                        Carlos Lavié
                    </p>
                    <p className="text-yellow-500 text-md font-semibold text-center mb-3">Portfolio</p>
                </div>
                {/* <div className="w-full flex flex-col h-screen overflow-y-hidden"> */}
                {/* <header className="w-full py-5 px-6 sm:hidden"> */}
                    <nav className="text-white text-base font-semibold pt-3">
                        
                        <Link to="/" className="font-sans block text-white text-2xl  py-4 pl-6">
                            <button onClick={()=>{traerOpen(false)}}>Inicio</button>
                        </Link>
                        <Link to="proyectos" className="font-sans block text-white text-2xl  py-4 pl-6">
                            <button onClick={()=>{traerOpen(false)}}>Proyectos</button>
                        </Link>
                        {/* <Link to="" className="font-sans block text-white text-2xl  py-4 pl-6">
                            Proyectos
                        </Link> */}
                        <Link to="about" className="font-sans block text-white text-2xl  py-4 pl-6">
                            <button onClick={()=>{traerOpen(false)}}>Currículum</button>
                        </Link>
                        <Link to="contacto" className="font-sans block text-white text-2xl  py-4 pl-6">
                            <button onClick={()=>{traerOpen(false)}}>Contacto</button>
                        </Link>
                    </nav>
                {/* </header> */}
            {/* </div> */}
            </aside>

            
            </>
     );
}
 
export default Sidebar;