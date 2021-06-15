import React from 'react';
import '../App.css'

const About = () => {
    return ( 
        <div className="heroContainerCV bg-green-900 md:pt-10" >
             <div className="
              bg-white bg-opacity-80 shadow-xl
             md:flex sm:flex
             md:flex-row sm:flex-col
             md:justify-around sm:justify-center
             md:rounded-t-2xl sm:rounded-t-none
             md:mx-auto sm:mx-auto
             md:w-2/4 sm:w-screen
             md:items-center sm:items-center">
                <div className="text-center">
                    <p className="font-sans text-6xl font-semibold text-black py-6"> 
                    Carlos<span className="font-sans text-6xl font-extrabold">Lavié</span> 
                    </p>
                    <img src="images/yoshadow.png" className="object-contain 
                    md:pb-4 focus-within:sm:px-0 
                    sm:mx-auto
                    md:h-48 sm:h-24"/>
                </div>
                <div className="md:bg-black md:bg-opacity-40 md:h-60 md:w-px md:block sm:hidden">
                    
                </div>
                <div>
                   <p className="text-3xl text-center font-semibold">Full Stack Developer</p>
                   <p className="font-sans text-5xl text-center font-extrabold">React JS</p>
                </div>
            </div>

            <div className="
              bg-white bg-opacity-80 shadow-md
             md:flex sm:flex
             md:flex-row sm:flex-col
             md:justify-around sm:justify-center
             md:rounded-b-2xl sm:rounded-b-none
             md:mb-10 sm:mb-4
             md:pb-10 sm:pb-6
             md:mx-auto sm:mx-auto
             md:px-8
             md:w-2/4 sm:w-screen
             md:items-center sm:items-center">
            <div>
{/* ------------------------Objetivos--------------------- */}
                <div className="mb-3">
                    <p className="font-sans text-2xl text-center font-bold my-3 ">
                    Objetivos
                    </p>

                    <p className="font-sans text-center">
                    Incorporarme a una empresa del rubro de la programacion, en la que pueda contribuir con mis conocimientos y experiencia al desarrollo de la misma, como así también pueda seguir aprendiendo y creciendo profesionalmente.</p>
                </div>

{/* ------------------------Estudios--------------------- */}

                <div className="mb-3">
                    <p className="font-sans text-2xl text-center font-bold my-3 ">
                Estudios
                </p>
                </div>

                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-4">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Titulo:</span> Alkemy Labs, aceleración de formación de desarolladores React JS trainee con todas las herramientas técnicas, blandas y de metodologías de trabajo para facilitar su inserción laboral. Resolución de desafíos prácticos individuales y en equipo implementando metodologías ágiles.</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Institución:</span> Alkemy Labs</p>
                    <p className="font-sans">
                    <span className="font-sans font-bold">Período:</span> Abril 2021 / a la fecha</p>
                </div>

                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-4">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Titulo:</span> Diplomatura en programación web full stack Development con React JS</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Institución:</span> UTN</p>
                    <p className="font-sans">
                    <span className="font-sans font-bold">Período:</span> Sepiembre 2020 / Marzo 2021</p>
                </div>
                
                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-4">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Titulo:</span> Certificación de conocimientos en React - Hooks - Gatsby - GraphQL - Firestore - Redux - Redux Toolkit - Context - MERN - Next.js - Styled - Components - Testing - Cypress.</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Institución:</span> Udemy (dictado por Juan Pablo De la torre Valdez)</p>
                    <p className="font-sans">
                    <span className="font-sans font-bold">Período:</span> Sepiembre 2020 / a la fecha</p>
                </div>
                
                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-4">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Titulo:</span> Diseñador Gráfico (incompleto)</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Institución:</span> Universidad de Palermo</p>
                    <p className="font-sans">
                    <span className="font-sans font-bold">Período:</span> 2004 / 2006</p>
                </div>
                
                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-4">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Titulo:</span> Bachiller</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Institución:</span> Colegio del Salvador</p>
                    <p className="font-sans">
                    <span className="font-sans font-bold">Año de egreso:</span>1999</p>
                </div>

{/* ------------------------TRABAJOS--------------------- */}
                <div className="mb-3">
                    <p className="font-sans text-2xl text-center font-bold my-3 ">
                    Experiencia Laboral
                </p>
                </div>

                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-4">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Período:</span> Enero 2005 / Feb. 2008</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Empresa:</span> Solution Box SRL</p>
                    <p className="font-sans">
                    <span className="font-sans font-bold">Funciones:</span>Desarrollos visuales para web, creación de publicidades para emails, desarrollo de gráfica para exposiciones, folletos, catálogos. </p>
                </div>

{/* ------------------------Información Adicional--------------------- */}
                <div className="mb-3">
                    <p className="font-sans text-2xl text-center font-bold my-3 ">
                    Información Adicional
                </p>
                </div>

                <div className="border-b-2 border-black border-opacity-10  pb-3 mb-6">
                    <p className="font-sans">
                    <span className="font-sans font-bold">Idiomas:</span> Inglés, bueno manejo oral y escrito.</p>
                    <p className="font-sans ">
                    <span className="font-sans font-bold">Herramientas:</span> Visual Studio Code - Mysql - Node JS - React JS - Postman - Photoshop - Premiere - Illustrator - Paquete Office</p>    
                    <p className="font-sans">
                    <span className="font-sans font-bold">Carreras alternativas:</span>Profesional gastrónomico (IAG - periodo:  2012 / 2013) / Realizador integral de cine y tv (CIC - período 2002 / 2004). </p>
                </div>

            </div>
            </div>

            

            
            
        </div>
     );
}
 
export default About;