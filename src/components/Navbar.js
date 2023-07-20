import Logo from "../assets/4rest-logo-color.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-200'>
      <div>
        <img src={Logo} alt='logo' style={{ height: '50px' }}/>
      </div>
      {/* menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* mobile menu */}
      <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar