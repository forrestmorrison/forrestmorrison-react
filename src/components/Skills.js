import { motion } from "framer-motion"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Bootstrap from "../assets/bootstrap.png"
import Tailwind from "../assets/tailwind.png"
import MUI from "../assets/mui.png"
import Git from "../assets/git.png"
import NodeJS from "../assets/node.png"
import MySQL from "../assets/mysql.png"
import GoogleCloud from "../assets/googlecloud.png"
import Auth0 from "../assets/auth0.png"


const Skills = () => {  

  const fadeInVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }
  }

  return (
    <div name="skills" className="mb-16">
        <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="px-2">
                <motion.div 
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Skills</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="py-4">These are the technologies I've worked with:</p>
                </motion.div>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={HTML} alt="HTML icon" />
                    <p className="mb-4">HTML</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={CSS} alt="CSS icon" />
                    <p className="mb-4">CSS</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={Javascript} alt="CSS icon" />
                    <p className="mb-4">Javascript</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 2.5 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={ReactImg} alt="CSS icon" />
                    <p className="mb-4">React</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={Git} alt="HTML icon" />
                    <p className="mb-4">Git</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={Bootstrap} alt="CSS icon" />
                    <p className="mb-4">Bootstrap</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={Tailwind} alt="CSS icon" />
                    <p className="mb-4">Tailwind CSS</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 2.5 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={MUI} alt="CSS icon" />
                    <p className="mb-4">Material UI</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={NodeJS} alt="HTML icon" />
                    <p className="mb-4">Node JS</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={MySQL} alt="CSS icon" />
                    <p className="mb-4">MySQL</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={GoogleCloud} alt="CSS icon" />
                    <p className="mb-4">Google Cloud</p>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 2.5 }}
                    viewport={{ once: true }}
                >
                    <img className="w-20 mx-auto py-4" src={Auth0} alt="CSS icon" />
                    <p className="mb-4">Auth0</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Skills