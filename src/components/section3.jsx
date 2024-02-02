import Flag from "./svg/flag";
import ScanSvg from "./svg/scan";
import imgqr from "../assets/qrcarta.jpg";
import "animate.css";
import React, { useEffect, useRef } from "react";




  



function Section3() {

  const flagSectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      // Obtén la posición y dimensiones de la sección de la bandera
      const { top, bottom } = flagSectionRef.current.getBoundingClientRect();

      // Verifica si la sección de la bandera está en la vista del usuario
      if (top < window.innerHeight && bottom >= 0) {
        // La sección de la bandera está visible, agrega la clase de animación
        flagSectionRef.current.classList.add('tu-clase-de-animacion');
      } else {
        // La sección de la bandera no está visible, elimina la clase de animación
        flagSectionRef.current.classList.remove('tu-clase-de-animacion');
      }
    };

    // Agrega el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row justify-end  w-1/2  ">
        <div id="a" className="flex flex-col w-3/4 h-full  bg-white">
          <div className="flex flex-row basis-1/3 bg-[#F5F5F1]">
            <div ref={flagSectionRef} className="basis-1/3 animate__animated animate__swing animate__infinite">
              <Flag width={200} height={200} />
            </div>
            <div className="basis-3/4 flex justify-center items-center rotate-12 ">
              <h1 className="text-6xl font-bold text-yellow-500 ">
                OFF<span className="text-red-500">SIDEEE!</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center basis-1/3 bg-[#F5F5F1]">
            <h1 className="text-5xl font-lato font-bold">
              Adelantate a la jugada
            </h1>
          </div>
          <div className="flex flex-row basis-1/3 bg-[#F5F5F1]">
            <div className="w-1/2">
              <h1 className="text-5xl font-lato font-bold">
                Anda mirando el menú...
              </h1>
            </div>
            <div className="w-1/2 flex justify-end ">
              <ScanSvg width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex   w-1/2  ">
        <div className="flex items-center my-auto mx-auto w-2/4 h-full bg-gray-500 relative  border-blue-500 border-gradient-to-r from-gray-500 to-[#F5F5F1] p-1">
          <img src={imgqr} className=" h-full w-full "></img>
        </div>
      </div>
    </>
  );
}

export default Section3;
