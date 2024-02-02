import { useState } from "react";

function RangeMenu() {
    const [value, setValue] = useState(1);
    const handleInputChange = (event) => {
      setValue(event.target.value);
    };
    return (
      <div className="">
        <h1 className="flex text-7xl items-center justify-center  ">
          ${value * 2500} ARS
        </h1>
  
        <p className="flex text-lg font-semibold items-center justify-center font-office my-8">
          Menu para <span className="mx-2 font-bold"> {value} </span> a un precio
          estimado de $2500 por persona
        </p>
  
        <input
          id="minmax-range"
          onChange={handleInputChange}
          type="range"
          min="1"
          max="10"
          value={value}
          className=" w-full h-2 bg-black text-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    );
  }

  export default RangeMenu;