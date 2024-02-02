import imgCoffe from '../assets/coffe.avif'

function Section2 () {
    return (
        <>
         <div className="relative flex  w-1/2  ">
            <div className="flex items-center my-auto mx-auto w-2/4 h-5/6 bg-gray-500 relative  border-blue-500 border-gradient-to-r from-gray-500 to-[#F5F5F1] p-1">
              <img src={imgCoffe} class=" h-full w-full "></img>
            </div>
          </div>
          <div className="flex  w-1/2 ">
            <div className=" flex flex-col  w-3/4 bg-transparent h-5/6 left-0 my-auto ">
              <div className="flex items-center justify-center basis-1/3  ">
                <h1 className="text-5xl font-lato   font-bold font-mono">
                  Despierta tus sentidos
                  <br></br>
                  En cada sorbo.
                </h1>
              </div>
              <div className="flex items-center justify-center basis-1/3 bg-transparent">
                <p className="mx-10 text-xl font-semibold font-office leading-loose">
                  Nuestra cafetería ofrece una experiencia única con
                  especialidades de café artesanal, deliciosas pastelerías
                  caseras y un ambiente relajado. Disfruta de momentos
                  memorables mientras exploras una variedad de opciones para
                  todos los amantes del café.
                </p>
              </div>
              <div className="flex  flex-row  basis-1/3  bg-transparent">
                <div className="flex flex-col justify-center items-center basis-1/3  bg-transparent">
                  <div className="flex justify-center items-center basis-1/2 w-full h-full">
                    <h1 className="text-4xl font-semibold">
                      10 <span className="text-yellow-600 ">+</span>
                    </h1>
                  </div>
                  <div className=" flex justify-center  basis-1/2 w-full h-full">
                    <h2>Variedades de Café</h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center basis-1/3  bg-transparent">
                  <div className="flex justify-center items-center basis-1/2 w-full h-full">
                    <h1 className="text-4xl font-semibold">
                      20 <span className="text-yellow-600 ">+</span>
                    </h1>
                  </div>
                  <div className="flex justify-center basis-1/2 w-full h-full mx-auto my-auto">
                    <h2>Platos principales</h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center basis-1/3  bg-transparent">
                  <div className="flex justify-center items-center basis-1/2 w-full h-full">
                    <h1 className="text-4xl font-semibold">
                      20 <span className="text-yellow-600 ">+</span>
                    </h1>
                  </div>
                  <div className="flex justify-center basis-1/2 w-full h-full mx-auto my-auto">
                    <h2>Cocteles clasicos</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Section2;