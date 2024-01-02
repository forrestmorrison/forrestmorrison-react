import ForrestName from "../assets/forrest-name-white.png"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className='w-full h-[160px] sm:h-[80px] flex flex-col sm:flex-row justify-evenly sm:justify-between items-center px-4 mt-2 bg-[#119f05] text-white'>
        <div className="m-2 text-center sm:text-right">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <img src={ForrestName} alt="Forrest name" className="h-[30px] mb-2" />
            </motion.div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>copyright ©2023</p>
            </motion.div>
        </div>
        <div className="m-2">
            <ul className="flex flex-row justify-evenly">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <li className="hover:scale-110 duration-500">
                        <a className="text-white" href="https://www.github.com/forrestmorrison" target="_blank" rel="noreferrer">
                            <FaGithub size={30}/>
                        </a>
                    </li>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <li className="hover:scale-110 duration-500">
                        <a className="text-white" href="https://www.linkedin.com/in/forrestmorrison" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <li className="hover:scale-110 duration-500">
                        <a className="text-white" href="https://www.x.com/4restmorrison" target="_blank" rel="noreferrer">
                            <FaXTwitter size={30}/>
                        </a>
                    </li>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <li className="hover:scale-110 duration-500">
                        <a className="text-white" href="https://www.youtube.com/@4restmorrison" target="_blank" rel="noreferrer">
                            <FaYoutube size={30}/>
                        </a>
                    </li>
                </motion.div>
            </ul>
        </div>
    </div>
  )
}

export default Footer