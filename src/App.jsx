import NavBar from "./components/navbar";

import "./index.css";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

import Section4 from "./components/section4";
import WhapSvg from "./components/svg/whap";
import VinesSvg from "./components/svg/vines";

function App() {
  return (
    <div className="overflow-x-hidden  bg-[#F5F5F1] ">
      <NavBar />
      <div className="fixed lg:absolute  left-0 z-0 bg-[#F5F5F1]">
        <div className="flex flex-col ">
        <VinesSvg />
        </div>
        <div className="flex flex-col ">
        <VinesSvg />
        </div>
        {/* <div className="flex flex-col lg:hidden ">
        <VinesSvg />
        </div> */}
        
      </div>

      <main className="w-screen  overflow-x-hidden bg-[#F5F5F1] overflow-x-hidden z-10 ">
        <div className="fixed  right-0 bottom-0 z-10">
          <h1  className="text-center font-semibold">
            Reservas <br></br>& <br></br>
            TakeAway
          </h1>
          <a target="_blank"  href='https://api.whatsapp.com/send?phone=3455227681'>
            <WhapSvg />
          </a>
        </div>
        <section className="flex flex-col lg:flex-row  justify-center items-center  bg-[#F5F5F1] w-full  my-32 lg:mb-12  z-10">
          <Section1 />
        </section>
        <section className="flex flex-col lg:flex-row my-60  w-full  ">
          <Section2 />
        </section>
        <section className="flex flex-col lg:flex-row justify-center my-36 lg:my-60   w-full  ">
          <Section3 />
        </section>
        <section className="flex  flex-col md:flex-row lg:flex-row justify-center items-center w-full my-12 lg:my-44   lg:pt-0  ">
          <Section4 />
        </section>
      </main>
    </div>
  );
}

export default App;
