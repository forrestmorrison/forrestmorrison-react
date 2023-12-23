import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex justify-center items-center p-4 sm:mb-20">
        <form method="POST" action="https://getform.io/f/ee816ad2-c895-4436-b08a-427a9f0760a8" className="flex flex-col max-w-[600px] w-full">
            <div className="text-center pb-2 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Contact Me</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="py-4">You can also find my contact info on <a href="https://www.linkedin.com/in/forrestmorrison" className="font-bold text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">LinkedIn</a></p>
              </motion.div>                   
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <input className="border-2 border-[#119f05] my-2 p-2 w-full" type="text" placeholder="Name" name="name"></input>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <input className="border-2 border-[#119f05] my-2 p-2 w-full" type="email" placeholder="Email" name="email"></input>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <textarea className="border-2 border-[#119f05] my-2 p-2 w-full" name="message" placeholder="Message" rows="10"></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <button className="px-6 py-3 my-2 mx-auto flex items-center text-white bg-[#119f05] hover:bg-[#5dbb10] duration-300">Send</button>
            </motion.div> 
        </form>
    </div>
  )
}

export default Contact