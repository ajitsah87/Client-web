function Support() {
  return (
    <>
      <div className="flex  gap-64 text-center mx-28 justify-center items-center mt-20 max-xl:gap-48 max-lg:gap-32 max-md:gap-20 mb-20 pb-10 max-lg:flex-wrap max-sm:mx-4">
        <div className="flex flex-col  text-pretty items-center     ">
          <div className="bg-[url('/bg.png')] bg-no-repeat mb-4 h-40 w-44 px-10">
            <img src="/1p.png" alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-nowrap mb-8">
              Self Paced Video <br /> Courses
            </h2>
            <p className="leading-[1.7rem] text-pretty ">
              Our self-paced course offers a great opportunity for anyone who
              wants to learn new skills or gain knowledge in a particular field.
              Our course also comes with personalized support from our
              experienced instructors.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-pretty items-center ">
          <div className="bg-[url('/bg.png')] bg-no-repeat mb-4 h-40 w-44 px-10">
            <img src="/2p.png" alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-nowrap mb-8">
              Our Technical <br /> Instructors 
            </h2>
            <p className="leading-[1.7rem] text-pretty">
            Our technical instructors provide a valuable source of support for our customers. They are highly experienced in their respective fields and can help our customers understand complex topics quickly and easily.
            </p>
          </div>
        </div>
        <div className="flex flex-col  text-pretty items-center ">
          <div className="bg-[url('/bg.png')] bg-no-repeat mb-4 h-40 w-44 px-10">
            <img src="/3p.png" alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-nowrap mb-8">
              Courses With <br /> Certifications
            </h2>
            <p className="leading-[1.7rem] text-pretty">
            With a certification, you can demonstrate your knowledge and skills in a particular area of expertise, and show potential employers that you are qualified for the job.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
