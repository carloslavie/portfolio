import React  from 'react';
import '../App.css';

const Sidebar = () => {

    

    return ( 
        <>
            <aside className="bgaside bg-opacity-90 transition delay-300 duration-300 -translate-x-full fixed left-0 top-0 z-50 h-full w-72 md:hidden sm:block shadow-xl ">
                <div className="pt-6 text-center border-b border-t">
                    <a href="" className="text-yellow-500 text-4xl font-bold">
                        Carlos Lavié
                    </a>
                    <p className="text-yellow-500 text-md font-semibold text-center mb-3">Portfolio</p>
                </div>
                {/* <div className="w-full flex flex-col h-screen overflow-y-hidden"> */}
                {/* <header className="w-full py-5 px-6 sm:hidden"> */}
                    <nav className="text-white text-base font-semibold pt-3">
                        
                        <a href="" className="font-sans block text-white text-2xl  py-4 pl-6">
                            Inicio
                        </a>
                        <a href="" className="font-sans block text-white text-2xl  py-4 pl-6">
                            Proyectos
                        </a>
                        <a href="" className="font-sans block text-white text-2xl  py-4 pl-6">
                            Sobre mi
                        </a>
                        <a href="" className="font-sans block text-white text-2xl  py-4 pl-6">
                            Github
                        </a>
                        <a href="" className="font-sans block text-white text-2xl  py-4 pl-6">
                            Contacto
                        </a>
                    </nav>
                {/* </header> */}
            {/* </div> */}
            </aside>

            
            </>
     );
}
 
export default Sidebar;