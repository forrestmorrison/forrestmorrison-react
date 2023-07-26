import { useState } from "react"
import Logo from "../assets/4rest-logo-color.png"
import { FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white'>
      <div>
        <Link to="home" smooth={true} duration={500}>
          <a href="/">
            <img src={Logo} alt='logo' style={{ height: '40px' }}/>
          </a>
        </Link>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="text-[#119f05] hover:text-[#5dbb10]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#119f05] hover:text-[#5dbb10]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-[#119f05] hover:text-[#5dbb10]">
          <Link to="skills" smooth={true} offset={-70} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-[#119f05] hover:text-[#5dbb10]">
          <Link to="work" smooth={true} offset={-70} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-[#119f05] hover:text-[#5dbb10]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}

      <div onClick={handleClick} className="md:hidden z-10 text-[#119f05] hover:text-[#5dbb10]">
        { !nav ? <FaBars /> : <FaTimes /> }
      </div>

      {/* mobile menu */}

      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"}>
        <li className="py-6 text-2xl text-[#119f05] hover:text-[#5dbb10]">
          <Link to="home" onClick={handleClick} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#119f05] hover:text-[#5dbb10]">
          <Link to="about" onClick={handleClick} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#119f05] hover:text-[#5dbb10]">
          <Link to="skills" onClick={handleClick} smooth={true} offset={-70} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#119f05] hover:text-[#5dbb10]">
          <Link to="work" onClick={handleClick} smooth={true} offset={-70} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#119f05] hover:text-[#5dbb10]">
          <Link to="contact" onClick={handleClick} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
            <a className="flex justify-between items-center w-full text-white" href="https://www.github.com/forrestmorrison">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
            <a className="flex justify-between items-center w-full text-white" href="https://www.linkedin.com/in/forrestmorrison">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
            <a className="flex justify-between items-center w-full text-white" href="https://www.instagram.com/4restmorrison">
              Instagram <FaInstagram size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
            <a className="flex justify-between items-center w-full text-white" href="https://www.twitter.com/4restmorrison">
              Twitter <FaTwitter size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
            <a className="flex justify-between items-center w-full text-white" href="https://www.youtube.com/@4restmorrison">
              YouTube <FaYoutube size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar