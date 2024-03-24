import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChalkboardUser } from "react-icons/fa6";

function Courses() {
  // Define an array of course objects
  const courses = [
    {
      id: 1,
      title: "C Programming",
      image: "/c.png",
      instructor: "Sachin Kapoor",
      level: "Beginner",
      lessons: 60
    },
    {
      id: 2,
      title: "C++ Programming",
      image: "/c++.png",
      instructor: "Sachin Kapoor",
      level: "Beginner",
      lessons: 60
    },
    {
      id: 3,
      title: "Core Java (JSE) Development",
      image: "/java.png",
      instructor: "Sachin Kapoor",
      level: "Beginner",
      lessons: 60
    },
    {
      id: 4,
      title: "Python Programming",
      image: "/python.png",
      instructor: "Sachin Kapoor",
      level: "Beginner",
      lessons: 60
    }
  ];

  return (
    <>
      <div>
        <div className="flex max-lg:flex-col justify-between max-lg:items-center mx-28 my-20">
          <h1 className="text-4xl max-lg:my-5 max-lg:text-center">Most popular <span className="bg-gradient">courses</span></h1>
          <button className="px-4 py-2 bg-green-500 rounded-sm text-nowrap">Explore All Courses</button>
        </div>
        <div className="flex gap-8 mb-10 justify-center max-lg:grid max-lg:grid-cols-2 max-lg:place-content-center max-lg:justify-center max-md:grid-cols-1 max-md:justify-center mx-10 max-sm:mx-2">
          {/* Map over the courses array to render each course */}
          {courses.map(course => (
            <div key={course.id} className="border hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 max-md:w-96 mx-auto max-sm:w-[350px]">
              <div className="h-52 max-xl:h-44 max-lg:h-72">
                <img className="h-full" src={course.image} alt="" />
              </div>
              <div className="pl-8">
                <p className="pt-3 pb-2 text-emerald-700 font-semibold">{course.instructor}</p>
                <h4 className="font-semibold text-xl">{course.title}</h4>
                <div className="flex max-xl:flex-wrap gap-4 max-xl:gap-2 mb-4">
                  <p className=""><GiHamburgerMenu className="inline-block mr-2" />{course.level}</p>
                  <p className=""><FaChalkboardUser className="inline-block mr-2" />{course.lessons} Lessons</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
