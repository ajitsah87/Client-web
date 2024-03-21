import { FaLongArrowAltRight } from "react-icons/fa";
function Learn() {
  return (
    <>
      <div className=" flex mx-20 bg-sky-100 h-96 text-center  items-center justify-center flex-col px-72 max-xl:mx-10 max-xl:px-60 max-lg:px-36 max-md:px-20 max-md:mx-4">
        <h1 className="text-5xl font-semibold  text- py-10 max-lg:text-4xl max-md:text-3xl ">Learn from tremendous instructors live.</h1>
        <button className=" py-2 px-8 rounded-sm text-white bg-[#3a10e5] hover:bg-[#faac3b] hover:text-[#3a10e5] transition-all duration-300 flex gap-1 hover:scale-105 text-nowrap max-sm:text-base ">Meet Our Instructos<FaLongArrowAltRight className="mt-1.5 hover:scale-105 max-sm:text-base"/></button>
      </div>
    </>
  );
}

export default Learn;
