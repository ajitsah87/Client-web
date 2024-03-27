import CountUp from "react-countup";

const Impact = () => {
  const impacts = [
    { values: 99, spec: "%", title: "Satisfaction Rate " },
    { values: 2.5, spec: "Lac+", title: "Lerners" },
    { values: 35, spec: "K", title: "Batches Delivered" },
    { values: 24, spec: "+", title: "Years of Experience" },
  ];

  return (
    <div className="bg-[#6082B6] my-28 relative">
      <h3 className="title text-center mt-10 text-5xl font-semibold pt-10">
        Our Impact
      </h3>
      <div className=" flex max-lg:flex-col justify-center items-center mt-8 ">
        {impacts.map((impact, i) => (
          <div
            key={i}
            className=" z-10 flex flex-col items-center space-y-1 px-4 max-lg:px-1 w-full py-14 "
          >
            <p className="text-5xl font-bold text-[#]">
              <CountUp end={impact.values} enableScrollSpy scrollSpyOnce />{impact.spec}
            </p>
            <p className="text-2xl font-medium">{impact.title}</p>
          </div>
        ))}
      </div>
      <img src="/shape4.png" alt="" className="absolute top-20 right-2 max-lg:top-[50%] max-md:right-2"/>
    </div>
  );
};

export default Impact;
