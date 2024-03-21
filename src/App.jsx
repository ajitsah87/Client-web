import Hero from "./Components/Hero"
import Learn from "./Components/Learn"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Start from "./Components/Start"
import Support from "./Components/Support"
import Impact from "./Components/Impact"
import Courses from "./Components/Courses"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const router= createBrowserRouter([
  //   {
  //     path:"/",
  //     element:  <Hero/>
  //   },
  //   {
  //    path: "/impect" ,
  //    element: <Impact/>
  //   },
  // ])
  return (
    <>
     <Navbar/>
     {/* <RouterProvider router={router}/> */}
     <Hero/>
     <Skills/>
     <Learn/>
     <Impact/>
     <Support/>
     <Start/>
     <Courses/>
    </>
  )
}

export default App

