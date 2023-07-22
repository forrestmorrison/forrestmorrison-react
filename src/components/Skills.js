import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Bootstrap from "../assets/bootstrap.png"
import Tailwind from "../assets/tailwind.png"
import MUI from "../assets/mui.png"
import Git from "../assets/git.png"
import NodeJS from "../assets/node.png"
import ExpressJS from "../assets/expressjs.png"
import MySQL from "../assets/mysql.png"
import GoogleCloud from "../assets/googlecloud.png"
import AWS from "../assets/aws.png"
import Firebase from "../assets/firebase.png"
import MongoDB from "../assets/mongodb.png"
import Auth0 from "../assets/auth0.png"


const Skills = () => {  
  return (
    <div name="skills">
        <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="px-2">
                <p className="text-4xl font-bold inline border-b-4 border-[#119f05]">Skills</p>
                <p className="py-4">These are the technologies I've worked with:</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={HTML} alt="HTML icon" />
                    <p className="mb-4">HTML</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={CSS} alt="CSS icon" />
                    <p className="mb-4">CSS</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={Javascript} alt="JS icon" />
                    <p className="mb-4">Javascript</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={ReactImg} alt="React icon" />
                    <p className="mb-4">React</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={Git} alt="Git icon" />
                    <p className="mb-4">Git</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={Bootstrap} alt="Bootstrap icon" />
                    <p className="mb-4">Bootstrap</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={Tailwind} alt="Tailwind icon" />
                    <p className="mb-4">Tailwind CSS</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={MUI} alt="MUI icon" />
                    <p className="mb-4">Material UI</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={NodeJS} alt="Node icon" />
                    <p className="mb-4">Node JS</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={MySQL} alt="MySQL icon" />
                    <p className="mb-4">MySQL</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={GoogleCloud} alt="Google Cloud icon" />
                    <p className="mb-4">Google Cloud</p>
                </div>
                <div className="bg-gray-100 shadow-md shadow-gray-300 hover:scale-105 duration-500">
                    <img className="w-20 mx-auto py-4" src={Auth0} alt="Auth0 icon" />
                    <p className="mb-4">Auth0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills