import RangeMenu from "./rangemenu"
import MyMap from "./map";
import { useState } from "react";

function Section1 () {
    return(
        <>
            <div className="flex flex-initial  items-center justify-center w-1/3  rounded-3xl   ">
            <div className="flex flex-col bg-[#F5F5F1] w-3/4 h-3/4  ">
              <div className="flex bg-[#F5F5F1] items-center justify-center basis-1/3 ">
                <h1 className="text-5xl font-lato  font-bold font-mono">
                  <span className="text-red-500   font-mono">
                    El mejor Café.
                  </span>
                  <br></br>
                  El menor precio
                </h1>
              </div>
              <div className=" bg-[#F5F5F1] basis-2/3 ">
                <RangeMenu />
              </div>
            </div>
          </div>
          <div className="flex-initial w-1/3  rounded-3xl   ">
            <MyMap />
          </div>
        </>
    )
}

export default Section1;