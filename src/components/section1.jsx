import RangeMenu from "./rangemenu";
import MyMap from "./map";
import { useState } from "react";

function Section1() {
  return (
    <>
      
        <div className="flex flex-initial  items-center justify-center w-2/3 lg:w-1/3  rounded-3xl z-10 mt-24 lg:mt-0  ">
          <div className="flex flex-col shrink-0  bg-transparent w-3/4 h-3/4  ">
            <div className="flex bg-transparent items-center justify-center basis-1/3 ">
              <h1 className="text-5xl font-lato  font-bold font-mono">
                <span className="text-red-500    font-mono">El mejor Café.</span>
                <br></br>
                El menor precio
              </h1>
            </div>
            <div className=" hidden  xl:block  bg-transparent basis-2/3 z-10 ">
              <RangeMenu />
            </div>
          </div>
        </div>
        <div className="flex-initial w-2/3   rounded-3xl mt-24 lg:mt-0 lg:w-1/3  ">
          <MyMap />
        </div>
  
    </>
  );
}

export default Section1;
