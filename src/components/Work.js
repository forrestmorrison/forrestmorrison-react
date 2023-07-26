import BitcoinBudget from "../assets/bitcoinbudget.jpg"
import BMXParks from "../assets/bmxparks.jpg"
import MyBlog from "../assets/myblog.jpg"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen">
        <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8 px-2 text-right">
                <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Work</p>
                <p className="py-4">These are the apps I have built:</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{ backgroundImage: `url(${BitcoinBudget})`}}>
                    <div className="shadow-lg shadow-gray-300 group container flex justify-center items-center text-center mx-auto content-div">
                        
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Bitcoin Budget
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-white text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-white text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${BMXParks})`}}>
                    <div className="shadow-lg shadow-gray-300 group container flex justify-center items-center text-center mx-auto content-div">
                        
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                BMX Parks
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-white text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-white text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${MyBlog})`}}>
                    <div className="shadow-lg shadow-gray-300 group container flex justify-center items-center text-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                My Blog
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-white text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg bg-white text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-8 px-2">
                <p className="my-4 py-4"><a href="https://www.linkedin.com/in/forrestmorrison" className="font-bold text-[#119f05] hover:text-[#5dbb10] hover:scale-110 duration-500">CLICK HERE</a> to view my LinkedIn profile</p>
            </div>
        </div>
    </div>
  )
}

export default Work