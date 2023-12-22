import { motion } from "framer-motion"

const About = () => {

  return (
    <div name="about" className="w-full h-screen bg-white">
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-4">
            <motion.div 
                className="max-w-[700px] w-full grid grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">About</p>
                </div>
                <div></div>
            </motion.div>
            <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <motion.div 
                    className="sm:text-right text-2xl font-bold"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <p>I'm a Web Developer in Austin, TX.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <p>
                        I specialize in building React applications & connecting them to Amazon Web Services & Google Cloud Console using Express JS & MySQL.
                        I'm proficient in HTML, CSS, Javascript & am currently learning Typescript.
                        I'm most passionate about improving my UI/UX skills & mastering fun technologies like Framer Motion, Material UI & Tailwind CSS, but I continue to gain interest in learning popular back-end technologies, as well.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About