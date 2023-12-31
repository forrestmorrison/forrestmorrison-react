import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
import ForrestName from "../assets/forrest-name-green.png"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
        
        {/* Container */}
        <div className="max-w-[900px] mx-auto p-8 flex flex-col justify-center h-full">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <p className="pb-2">Welcome to the official website of</p>
            </motion.div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={ForrestName} alt="Forrest name" />
            </motion.div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h2 className="py-4 text-2xl sm:text-4xl">Full-Stack Developer</h2>
            </motion.div>
            
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <Link to="work" smooth={true} duration={500} offset={-70}>
                    <button className="px-6 py-3 my-2 flex items-center group text-white bg-[#119f05] hover:bg-[#5dbb10] duration-300">
                        View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-4" />
                        </span>
                    </button>
                </Link>
            </motion.div>
        </div>

    </div>
  )
}

export default Home