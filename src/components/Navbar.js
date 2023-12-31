import { useState } from "react"
import Logo from "../assets/4rest-logo-color.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white shadow-sm z-10'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1}}
      >
        <Link to="home" smooth={true} duration={500}>
          <a href="/">
            <img src={Logo} alt='logo' style={{ height: '40px' }}/>
          </a>
        </Link>
      </motion.div>
      {/* menu */}

      <ul className="hidden md:flex">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <li className="text-[#119f05] hover:text-[#5dbb10] duration-500">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <li className="text-[#119f05] hover:text-[#5dbb10] duration-500">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <li className="text-[#119f05] hover:text-[#5dbb10] duration-500">
            <Link to="skills" smooth={true} offset={-70} duration={500}>
              Skills
            </Link>
          </li>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <li className="text-[#119f05] hover:text-[#5dbb10] duration-500">
            <Link to="work" smooth={true} offset={-70} duration={500}>
              Work
            </Link>
          </li>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <li className="text-[#119f05] hover:text-[#5dbb10] duration-500">
            <Link to="contact" smooth={true} offset={-50} duration={700}>
              Contact
            </Link>
          </li>
        </motion.div>
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
          <Link to="contact" onClick={handleClick} smooth={true} offset={-40} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0}}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
              <a className="flex justify-between items-center w-full text-white" href="https://www.github.com/forrestmorrison" target="_blank" rel="noreferrer">
                Github <FaGithub size={30}/>
              </a>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0}}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
              <a className="flex justify-between items-center w-full text-white" href="https://www.linkedin.com/in/forrestmorrison" target="_blank" rel="noreferrer">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0}}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
              <a className="flex justify-between items-center w-full text-white" href="https://www.x.com/4restmorrison" target="_blank" rel="noreferrer">
                X <FaXTwitter size={30}/>
              </a>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0}}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#119f05] hover:bg-[#5dbb10]">
              <a className="flex justify-between items-center w-full text-white" href="https://www.youtube.com/@4restmorrison" target="_blank" rel="noreferrer">
                YouTube <FaYoutube size={30}/>
              </a>
            </li>
          </motion.div>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar