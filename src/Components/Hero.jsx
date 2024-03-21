function Hero() {
  return (
    <>
      <div className="bg-[#6082B6] mb-20">
        <div className="  flex gap-16  max-xl:gap-10 w-screen max-xl:flex-col-reverse pb-40 max-xl:pb-16 pt-12 h-auto">
          <div className=" flex-1 pt-4">
            <h1 className="text-7xl regular mb-6 leading-snug  px-28 max-xl:text-center max-xl:text-6xl max-xl:leading-none max-lg:text-5xl max-lg:px-10 max-md:px-6 max-md:font-semibold max-sm:px-4 ">
              The Easiest Way to <span className=" bg-gradient">Learn</span> new
              technologies
            </h1>
            <p className=" leading-relaxed text-2xl px-20 text-[#ffffff] max-xl:mb-20 max-xl:text-center max-lg:text-xl max-lg:px-10 max-sm:px-4">
              Changing lives, organizations, and nations through expertise
              transformation in digital technology.
            </p>
          </div>
          <div className="flex-1 pt-10 ">
            <div className="flex gap-16 max-xl:gap-10 max-sm:gap-4 items-center justify-center">
              <div>
                <div className="bg-[#66c4ff]  h-56   rounded-2xl mb-20 max-md:mb-10 max-md:h-40    ">
                  <img
                    className="  object-contain h-[120%] w-full  -translate-y-[45px] max-md:-translate-y-8 "
                    src="/2.png"
                    alt=""
                  />
                </div>
                <div className="bg-[#F0F8FF]   h-56  mb-10  rounded-2xl max-md:h-40  ">
                  <img
                    className="object-contain h-[120%] w-full  -translate-y-[45px]  max-md:-translate-y-8 "
                    src="/3.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-[#CCCCFF] h-96 rounded-2xl max-md:h-72 ">
                <img
                  className="object-contain h-[120%] w-full  -translate-y-[76px] max-md:-translate-y-[57px] "
                  src="/1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
