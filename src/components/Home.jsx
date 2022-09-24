import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Typed from 'react-typed'
import { Link } from "react-scroll"


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-mountain bg-cover bg-fixed">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row font-main px-0">
            <div>
                <h2 className="text-6xl text-white">hi, i'm andy</h2>
                <div className="animated-typing text-6xl text-yellow-500">
                  <Typed
                    strings={[
                      "developer",
                      "gamer",
                      "student",
                    ]}
                    typeSpeed={80}
                    backspeed={200}
                    loop
                  />
                </div>
                <div>
                  <Link to="projects" smooth duration={500} className="z-10 text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gray-800 duration-200 hover:scale-105 cursor-pointer">View Work
                    <span className="px-1"><FaArrowRight/></span>
                  </Link>
                  <div className="z-20 absolute pointer-events-none inset-x-0 bottom-0 h-1/2 w-full left-0 bg-gradient-to-b from-transparent via-gray-450 to-gray-900">\
                  </div>
                </div>
            </div>
        </div>

    <script>
        
    </script>
    </div>
    
  );
}

export default Home