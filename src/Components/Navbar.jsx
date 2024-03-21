// import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <>
     <div className="bg-[#fffdfb] drop-shadow-sm w-full">
     <div className="py-2  mx-28 max-md:mx-10 flex items-center justify-between ">
        <div className="w-2/6">
          <img className="h-[50px]" src="/site_logos.png" alt="site logo" />
        </div>
        <div className="flex w-full">
          <ul className="flex items-center  justify-center w-full gap-10 ">
           {/* <Link to="/"> </Link>
           <Link to="/about"> </Link>
           <Link to="/contact"></Link>  */}
           <li className="cursor-pointer ">Home</li>
           <li className="cursor-pointer ">About Us</li>
           <li className="cursor-pointer ">Contact</li>
          </ul>
          <button className=" py-2 px-6 rounded-sm text-white bg-[#3a10e5] hover:bg-[#faac3b] hover:text-[#3a10e5] transition-all duration-300 flex gap-0.5 hover:scale-105  ">Courses</button>
        </div>
      </div>
     </div>
    </>
  );
}

export default Navbar;
