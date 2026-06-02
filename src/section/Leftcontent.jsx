import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
export default function LeftContent(){
    return(
        <>
     <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start ">
            <div >
                <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold">Hi There, I'm Yash Patil</h2>
                <p className=" font-semibold text-base sm:text-lg md:text-xl">I am into Mern Stack Development</p>
            </div>
            
            <div className="flex flex-col gap-4  ">
                  <button className="transition-all duration-500 bg-cyan-500 hover:bg-cyan-400 hover:scale-105 active:scale-95 text-black font-semibold rounded-xl px-5 py-3 cursor-pointer w-max flex items-center gap-2 shadow-lg">
                        Resume
                       <IoMdDownload className="text-xl" />
                    </button>

                     <button className="transition-all duration-500 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-105 active:scale-95 font-semibold rounded-xl px-5 py-3 cursor-pointer w-max">
                       View Projects
                      </button>
                  <div className="flex gap-6 pt-2">
                      <FaLinkedin className="text-3xl cursor-pointer transition-all duration-500 hover:text-cyan-500 hover:scale-110" />
                       <FaGithub className="text-3xl cursor-pointer transition-all duration-500 hover:text-cyan-500 hover:scale-110" />
                 </div>
            </div>
           
        </div>
        </>
    )
}