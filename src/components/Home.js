import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import ForrestName from "../assets/forrest-name-green.png"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
        
        {/* Container */}
        <div className="max-w-[700px] mx-auto p-8 flex flex-col justify-center h-full">
            <p className="pb-2">Welcome to the official website of</p>
            <img src={ForrestName} alt="Forrest name" />
            <h2 className="py-4 text-2xl sm:text-4xl">Full-Stack Developer</h2>
            <div>
                <button className="px-6 py-3 my-2 flex items-center group text-white bg-[#119f05] hover:bg-[#5dbb10] duration-300">
                    View Work
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-4" />
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home