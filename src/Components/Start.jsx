import { FaTelegram } from "react-icons/fa6";

function Start() {
  return (
    <>
      <div className="relative h-80 bg-yellow-500 flex text-center justify-center items-center flex-col">
        <h1 className="z-10 text-5xl font-semibold mb-10 ">Ready to kick-start your career?</h1>
        <button className="z-10 py-2 px-8 rounded-sm text-white bg-[#3a10e5] hover:bg-[#faac3b] hover:text-[#3a10e5] transition-all duration-300 flex gap-1 hover:scale-105 text-nowrap max-sm:text-base ">Join Us Now<FaTelegram className="mt-1.5 hover:scale-105 max-sm:text-base"/></button>
        <img src="/shape5.png" alt="" className="absolute top-20 right-8 max-md:top-36 max-md:right-2"/>
      </div>
    </>
  );
}

export default Start;
