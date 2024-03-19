function Skills() {
  const features = [
    {
      imgSrc: "/svg.png",
      imgAlt: "/svg.png",
      title: "Build A Career",
      description: "Everything you need to land a job",
    },
    {
      imgSrc: "/svg2.png",
      imgAlt: "/svg2.png",
      title: "Explore Skills",
      description: "See how various skills you have",
    },
    {
      imgSrc: "/svg3.png",
      imgAlt: "/svg3.png",
      title: "Gain A Skill",
      description: "Focus on what's you need",
    },
    {
      imgSrc: "/svg4.png",
      imgAlt: "/svg4.png",
      title: "Share knowledge",
      description: "Discuss and get clear knowledge",
    },
  ];

  return (
    <div className="pb-20">
      <div className="flex justify-center flex-wrap gap-20 max-md:gap-16 mx-28 max-lg:mx-10">
        <h2 className="w-96 max-lg:w-full max-lg:block text-wrap text-4xl font-semibold max-lg:text-center max-lg:mb-10">
          Get Everything You Need!
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex p-4 rounded-md gap-6 hover:scale-105 transition-all duration-300 max-lg:flex-col max-lg:px-10 max-lg:items-center hover:shadow-xl"
          >
            <img
              className="max-lg:h-20 max-lg:w-20"
              src={feature.imgSrc}
              alt={feature.imgAlt}
            />
            <div>
              <h4 className="font-semibold text-2xl max-lg:text-center">
                {feature.title}
              </h4>
              <p className="text-lg max-lg:text-center">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
