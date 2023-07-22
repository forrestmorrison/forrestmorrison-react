import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex justify-center items-center p-4">
        <form action="" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-2">
                <div className="text-center mb-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Contact Me</p>
                </div>
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