import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white">
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-4">
            <div className="max-w-[700px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[700px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-2xl font-bold">
                    <p>I'm a Web Developer in Austin, TX.</p>
                </div>
                <div>
                    <p>I'm currently seeking full-time employment, either remote or in the Austin area. 
                    I studied full-stack web development at Austin Coding Academy. 
                    My favorite aspects of coding are learning new ways to manipulate data with Javascript functions, improving my UI/UX skills and learning to build more complex apps with React.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About