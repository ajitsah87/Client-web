import { IoReorderThreeSharp } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
function Courses() {
  return (
    <>
      <div>
        <div className="flex max-lg:flex-col justify-between max-lg:items-center mx-28 my-20 max-md:mx-10 max-sm:mx-2 ">
            <h1  className="text-4xl max-lg:my-5 max-lg:text-center ">Most popular <span className="bg-gradient">courses</span></h1>
            <button className="px-4 py-2 bg-green-500 rounded-sm ">Explore All Courses</button>
        </div>
        <div className="mx-20 flex gap-8 mb-10 justify-center max-lg:grid max-lg:grid-cols-2 max-lg:place-content-center max-lg:justify-center max-md:grid-cols-1 ">
        <div className=" border hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="h-52 max-xl:h-48">
                    <img className="h-full" src="/c.png" alt="" />

                </div>
                <div className="pl-8">
                    <p className="pt-3 pb-2 text-emerald-700 font-semibold">Sachin Kapoor</p>
                    <h4 className="font-semibold text-xl">C Programming</h4>
                    <div className="flex items-center pt-4">
                    <IoReorderThreeSharp/><p className=" pl-2 pr-4">Beginner</p>
                    <FaChalkboardUser/> <p className="pr-2 pl-2">60 Lessons</p>
                    </div>
                </div>
            </div>
            <div className=" border hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="h-52 max-xl:h-48">
                    <img className="h-full" src="/c++.png" alt="" />

                </div>
                <div className="pl-8">
                    <p className="pt-3 pb-2 text-emerald-700 font-semibold">Sachin Kapoor</p>
                    <h4 className="font-semibold text-xl">C++ Programming</h4>
                    <div className="flex items-center pt-4 pb-10">
                    <IoReorderThreeSharp/><p className=" pl-2 pr-4">Beginner</p>
                    <FaChalkboardUser/> <p className=" pr-2 pl-2 ">60 Lessons</p>
                    </div>
                </div>
            </div>
        <div className="border hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="h-52 max-xl:h-48">
                    <img className="h-full" src="/java.png" alt="" />

                </div>
                <div className="pl-8">
                    <p className="pt-3 pb-2 text-emerald-700 font-semibold">Sachin Kapoor</p>
                    <h4 className="font-semibold text-xl">Core Java (JSE) <br/> Development </h4>
                    <div className="flex items-center pt-4 pb-10">
                    <IoReorderThreeSharp/><p className=" pl-2 pr-4 ">Beginner</p>
                    <FaChalkboardUser/> <p className="pr-2 pl-2">60 Lessons</p>
                    </div>
                </div>
            </div>
            <div className="border hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="h-52 max-xl:h-48">
                    <img className="h-full" src="/c++.png" alt="" />

                </div>
                <div className="pl-8">
                    <p className="pt-3 pb-2 text-emerald-700 font-semibold">Sachin Kapoor</p>
                    <h4 className="font-semibold text-xl">C++ Programming</h4>
                    <div className="flex items-center pt-4 pb-10 max-xl:flex-col">
                    <IoReorderThreeSharp/><span className=" pl-2 pr-4">Beginner</span>
                    <FaChalkboardUser/> <p className="pr-2 pl-2">60 Lessons</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
