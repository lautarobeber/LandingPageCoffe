import Platos from "./svg/platos";
import Carousel from "./swiper";
import "animate.css";
import React, { useEffect, useRef, useState } from "react";
import "intersection-observer";

function Section4() {
  const myComponentRefe = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // El componente es visible, actualiza el estado
        setIsVisible(true);
        observer.disconnect();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    if (myComponentRefe.current) {
      observer.observe(myComponentRefe.current);
    }

    return () => {
      if (myComponentRefe.current) {
        observer.unobserve(myComponentRefe.current);
      }
    };
  }, []);

  const divClassName = `flex justify-end items-center hidden lg:flex basis-1/3  w-1/3 h-1/2 ${
    isVisible ? "animate__animated animate__backInLeft " : ""
  }`;
  return (
    <>
      <div ref={myComponentRefe} className={divClassName}>
        <Platos w={400} h={400} />
      </div>
      <div className="basis-1/3 w-full lg:w-1/3 h-1/2">
        <Carousel />
      </div>
      <div className="flex  justify-center items-center basis-1/3 bg-[#F5F5F1] mt-12 lg:mt-0 w-1/3 h-1/2">
        <div className=" flex justify-center items-center lg:ml-0 w-1/2 h-3/4 ">
          <h1 className="text-5xl  font-lato  font-bold font-mono z-10">
            Por las dudas<br></br>
            Te dejamos unas fotos!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Section4;
