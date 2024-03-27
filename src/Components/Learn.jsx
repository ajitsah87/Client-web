import { FaLongArrowAltRight } from "react-icons/fa";
function Learn() {
  return (
    <>
    
   
      <div className="relative flex mx-20 bg-sky-100 h-96 text-center  items-center justify-center flex-col max-xl:mx-10 max-md:mx-4 max-sm:mx-1 py-60 max-md:py-20">
        <h1 className="z-10 text-5xl font-semibold py-10 max-lg:text-4xl max-md:text-3xl max-sm:px-2">Learn from tremendous instructors <br /> live.</h1>
        <button className=" z-10 py-2 px-8 rounded-sm text-white bg-[#3a10e5] hover:bg-[#faac3b] hover:text-[#3a10e5] transition-all duration-300 flex gap-1 hover:scale-105 text-nowrap max-sm:text-base ">Meet Our Instructos<FaLongArrowAltRight className="mt-1.5 hover:scale-105 max-sm:text-base"/></button>
        <img src="/shape1.png" alt="" className="absolute top-72 right-8 max-md:top-60 max-md:right-2"/>
        <img src="/shape2.png" alt="" className="absolute bottom-72 left-8 max-md:bottom-60 max-md:left-2"/>
      </div>
    
    </>
  );
}

export default Learn;
