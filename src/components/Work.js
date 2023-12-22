import BitcoinBudget from "../assets/bitcoin-budget-logo.png"
import MyBlog from "../assets/my-blog-logo.png"
import { motion } from "framer-motion"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen mb-20">
        <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8 px-2 text-right">
                <motion.div 
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0}}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                >
                    <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Work</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="py-4">These are the apps I have built:</p>
                </motion.div>
                
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <motion.div 
                    className="bg-gray-100 shadow-lg shadow-gray-300 container flex flex-col justify-between items-center text-center mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >         
                    <img src={BitcoinBudget} alt="" className="w-11/12 mt-12"/>
                    <div className="pt-8 mb-4 text-center">
                        <a href="https://www.bitcoinbudget.app">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">App</button>
                        </a>
                        <a href="https://github.com/forrestmorrison/bitcoin-budget">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">Code</button>
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 shadow-lg shadow-gray-300 container flex flex-col justify-between items-center text-center mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img src={MyBlog} alt="" className="w-1/2 mt-8"/>
                    <div className="pt-8 mb-4 text-center">
                        <a href="/">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">App</button>
                        </a>
                        <a href="https://github.com/forrestmorrison/my-blog">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">Code</button>
                        </a>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                className="pb-8 px-2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p className="my-4 py-4"><a href="https://www.linkedin.com/in/forrestmorrison" className="font-bold text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">CLICK HERE</a> to view my full resume on LinkedIn</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Work