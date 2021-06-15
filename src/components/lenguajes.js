import React from 'react';

const Lenguajes = () => {
    return ( 
        <>
        <p className="text-center md:text-left font-sans text-4xl text-white mt-16 mb-10">Skills</p>
        <div className="flex flex-row mb-40" >
            <div>
                <img src="images/react.png" alt="logoReact" className="w-40"/>
            </div>
            <div className="mx-5">
                <img src="images/jscript.png" alt="logoReact" className="w-20"/>
            </div>
            <div className="mx-5">
                <img src="images/csslogo.png" alt="logoReact" className="w-20"/>
            </div>
            <div className="mx-5">
                <img src="images/htmllogo.png" alt="logoReact" className="w-20"/>
            </div>
            <div className="mx-5">
                <img src="images/nodelogo.png" alt="logoReact" className="w-28"/>
            </div>
        </div>
        </>
     );
}
 
export default Lenguajes;