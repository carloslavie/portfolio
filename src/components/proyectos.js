import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Proyectos = () => {

    const proyectos = useSelector(state => state.proyectos.proyectos )

    console.log(proyectos)
    
    
    return ( 
        <>
        {proyectos.length === 0 ? <p>No hay proyectos que mostrar</p> : 
        
        <div className="h-screen xl:container sm:None sm:p-0 md:mx-auto sm:m-0 md:mb-40 ">  
        <div className="flex  flex-col-reverse md:flex-row  mt-20 mb-10 items-center justify-center">
            <p className="font-bold text-white font-sans  text-2xl md:text-4xl mr-3">Ver codigo en Repositorio</p>
            <img src="images/gitlogo.png" alt="logogit" className="gitimg"/>
        </div>
        <div className="
            grid 
            sm: grid-cols-2 md:grid-cols-8 
            md:gap-3 
            mx-auto">
            {proyectos.map(proyecto => (
                <div className="my-2"
                key={proyecto.id}>
                    <div className="relative ">
                        <div  className="text-white text-2xl ">
                            <div className="z-30  bg-black opacity-0 hover:opacity-70 h-full flex flex-col justify-center items-center absolute inset-x-0 bottom-0 text-center">
                                <a href={proyecto.url} alt="urlgit" className="bg-black w-full p-1 hover:bg-red-700 z-10 " >PROYECTO</a>
                                <a href={proyecto.giturl} alt="urlgit" className="bg-black w-full p-1 hover:bg-red-700 z-10" >CÓDIGO</a>
                            </div>
                            <img src={proyecto.img} alt="imagenproyecto" className="relative z-0"/>  
                        </div> 
                    </div>                                     
                </div>
                ))}
        </div>
        </div>
        }
        
        </>
     );
}
 
export default Proyectos;

