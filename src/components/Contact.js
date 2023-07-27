import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex justify-center items-center p-4 sm:mb-20">
        <form method="POST" action="https://getform.io/f/ee816ad2-c895-4436-b08a-427a9f0760a8" className="flex flex-col max-w-[600px] w-full">
                <div className="text-center pb-2 mb-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Contact Me</p>
                    <p className="py-4">You can also find my contact info on <a href="https://www.linkedin.com/in/forrestmorrison" className="font-bold text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">LinkedIn</a></p>
                </div>
            <input className="border-2 border-[#119f05] my-2 p-2" type="text" placeholder="Name" name="name"></input>
            <input className="border-2 border-[#119f05] my-2 p-2" type="email" placeholder="Email" name="email"></input>
            <textarea className="border-2 border-[#119f05] my-2 p-2" name="message" placeholder="Message" rows="10"></textarea>
            <button className="px-6 py-3 my-2 mx-auto flex items-center text-white bg-[#119f05] hover:bg-[#5dbb10] duration-300">Send</button>
        </form>
    </div>
  )
}

export default Contact