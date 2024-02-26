import Flag from "./svg/flag";
import ScanSvg from "./svg/scan";
import imgqr from "../assets/qrcarta.jpg";
import "animate.css";
import React, { useEffect, useRef, useState } from "react";
import 'intersection-observer';



  



function Section3() {

  const myComponentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // El componente es visible, actualiza el estado
        setIsVisible(true);
      } else {
        // El componente no es visible, actualiza el estado
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    if (myComponentRef.current) {
      observer.observe(myComponentRef.current);
    }

    return () => {
      if (myComponentRef.current) {
        observer.unobserve(myComponentRef.current);
      }
    };
  }, []);

  const divClassName = `basis-1/3${isVisible ? ' animate__animated animate__swing animate__repeat-2' : ''}`;

  return (
    <>
      <div className="flex flex-row justify-center lg:justify-end  w-full lg:w-1/2 z-10 bg-transparent mb-24 lg:mt-0 lg:pt-0 lg:mb-0   ">
        <div id="a" className="flex flex-col w-3/4 h-full  ">
          <div className="flex flex-row basis-1/3 bg-transparent">
            <div ref={myComponentRef} className={divClassName}>
              <Flag width={200} height={200} />
            </div>
            <div className="basis-3/4 flex justify-center items-center rotate-12 ">
              <h1 className="text-3xl lg:text-6xl font-bold text-yellow-500 ">
                OFF<span className="text-red-500">SIDEEE!</span>
              </h1>
            </div>
          </div>
          <div className="flex my-12 lg:my-0 justify-center items-center basis-1/3 ">
            <h1 className="text-3xl lg:text-5xl font-lato font-bold">
              Adelantate a la jugada
            </h1>
          </div>
          <div className="flex flex-row basis-1/3">
            <div className="w-1/2">
              <h1 className="text-3xl lg:text-5xl font-lato font-bold">
                Anda mirando el menú...
              </h1>
            </div>
            <div className="w-1/2 flex justify-end ">
              <ScanSvg width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-full lg:w-2/3  ">
        <div className="flex items-center my-auto mx-auto w-2/4 h-full bg-gray-500 relative  border-blue-500 border-gradient-to-r from-gray-500 to-[#F5F5F1] p-1">
          <img src={imgqr} className=" h-full w-full "></img>
        </div>
      </div>
    </>
  );
}

export default Section3;
