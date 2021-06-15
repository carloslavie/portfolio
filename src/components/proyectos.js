import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Proyectos = () => {

    const proyectos = useSelector(state => state.proyectos.proyectos )
console.log(proyectos)
    useEffect(() => {
        
    }, [])
    
    return ( 
        <>
        <div className="h-screen xl:container sm:None sm:p-0 md:mx-auto sm:m-0">  
        <div className="flex flex-row  mt-20 mb-10 justify-center">
            <p className="font-bold text-white font-sans text-4xl mr-3">Ver codigo en Repositorio</p>
            <img src="images/gitlogo.png" alt="logogit" className="gitimg"/>
        </div>
        <div className="grid grid-cols-8 gap-6 mx-auto  ">
            {proyectos.map(proyecto => (
                <div className="my-2">
                    <a href={proyecto.giturl} alt="urlgit">
                        <img src={proyecto.img} alt="imagenproyecto" className="containerImg"/>  
                    </a>                                      
                </div>
                ))}
        </div>
        </div>
        </>
     );
}
 
export default Proyectos;