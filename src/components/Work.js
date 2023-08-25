import BitcoinBudget from "../assets/bitcoin-budget-logo.png"
import MyBlog from "../assets/my-blog-logo.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen mb-20">
        <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8 px-2 text-right">
                <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Work</p>
                <p className="py-4">These are the apps I have built:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-100 shadow-lg shadow-gray-300 container flex flex-col justify-between items-center text-center mx-auto">         
                    <img src={BitcoinBudget} alt="" className="w-11/12 mt-12"/>
                    <div className="pt-8 mb-4 text-center">
                        <a href="https://bitcoin-budget-c75dd27ec5a4.herokuapp.com/">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">App</button>
                        </a>
                        <a href="https://github.com/forrestmorrison/bitcoin-budget">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">Code</button>
                        </a>
                    </div>
                </div>
                <div className="bg-gray-100 shadow-lg shadow-gray-300 container flex flex-col justify-between items-center text-center mx-auto">
                    <img src={MyBlog} alt="" className="w-1/2 mt-8"/>
                    <div className="pt-8 mb-4 text-center">
                        <a href="/">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">App</button>
                        </a>
                        <a href="https://github.com/forrestmorrison/my-blog">
                            <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-[#119f05] text-white hover:bg-[#5dbb10] hover:scale-110 duration-500">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pb-8 px-2">
                <p className="my-4 py-4"><a href="https://www.linkedin.com/in/forrestmorrison" className="font-bold text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">CLICK HERE</a> to view my resume on LinkedIn</p>
            </div>
        </div>
    </div>
  )
}

export default Work