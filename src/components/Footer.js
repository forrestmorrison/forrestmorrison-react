import ForrestName from "../assets/forrest-name-white.png"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='w-full h-[160px] sm:h-[80px] flex flex-col sm:flex-row justify-evenly sm:justify-between items-center px-4 mt-2 bg-[#119f05] text-white'>
        <div className="m-2 text-center sm:text-right">
            <img src={ForrestName} alt="Forrest name" className="h-[30px] mb-2" />
            <p>copyright ©2023</p>
        </div>
        <div className="m-2">
            <ul className="flex flex-row justify-evenly">
                <li className="hover:scale-110 duration-500">
                    <a className="text-white" href="https://www.github.com/forrestmorrison">
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li className="hover:scale-110 duration-500">
                    <a className="text-white" href="https://www.linkedin.com/in/forrestmorrison">
                        <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="hover:scale-110 duration-500">
                    <a className="text-white" href="https://www.twitter.com/4restmorrison">
                        <FaXTwitter size={30}/>
                    </a>
                </li>
                <li className="hover:scale-110 duration-500">
                    <a className="text-white" href="https://www.youtube.com/@4restmorrison">
                        <FaYoutube size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer