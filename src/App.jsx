import NavBar from "./components/navbar";

import "./index.css";



import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Carousel from "./components/swiper";



function App() {
  return (
    <div className="overflow-x-hidden  bg-[#F5F5F1] ">
      <NavBar />

      <main className="w-screen bg-[#F5F5F1] overflow-x-hidden ">
        <section className="flex flex-row justify-center  bg-[#F5F5F1] w-full h-[48rem] mt-36 mx-auto">
          <Section1 />
        </section>
        <section className="flex flex-row  w-full h-[48rem]">
          <Section2 />
        </section>
        <section className="flex flex-row pt-36 mb-24  w-full h-[48rem] ">
          <Section3 />
        </section>
        <section className="flex flex-row justify-center items-center w-full h-[48rem] bg-red-300  ">
          <div className="basis-1/3 bg-red-500 w-1/3 h-1/2"></div>
          <div className="basis-1/3 bg-blue-500 w-1/3 h-1/2"><Carousel/></div>
          <div className="flex justify-center items-center basis-1/3 bg-white w-1/3 h-1/2">
            <div className="flex justify-center items-center w-3/4 h-3/4 ">

              <h1 className="text-5xl font-lato  font-bold font-mono">
              Por las dudas<br></br>
              Te dejamos unas fotos!
              </h1>

            </div>
          </div>
         
        </section>
      </main>
    </div>
  );
}

export default App;
