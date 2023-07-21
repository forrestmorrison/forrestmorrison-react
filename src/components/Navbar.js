import { useState } from "react"
import Logo from "../assets/4rest-logo-color.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-200'>
      <div>
        <img src={Logo} alt='logo' style={{ height: '50px' }}/>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}

      <div onClick={handleClick} className="md:hidden z-10">
        { !nav ? <FaBars /> : <FaTimes /> }
      </div>

      {/* mobile menu */}

      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center"}>
          <li className="py-6 text-2xl">About</li>
          <li className="py-6 text-2xl">Home</li>
          <li className="py-6 text-2xl">Skills</li>
          <li className="py-6 text-2xl">Work</li>
          <li className="py-6 text-2xl">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar