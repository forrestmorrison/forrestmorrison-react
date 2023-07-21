import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
        
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full">
            <p className="font-bold ml-1">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#119f05]">Forrest Morrison</h1>
            <h2 className="text-2xl sm:text-5xl font-bold">I'm a Full-Stack Developer.</h2>
            <p className="py-4 max-w-[700px] ml-1">I specialize in building and designing responsive full-stack web applications.</p>
            <div>
                <button className="px-6 py-3 my-2 flex items-center group text-[white] bg-[#119f05] hover:bg-[#5dbb10] duration-300">
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