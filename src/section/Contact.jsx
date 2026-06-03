import { FcPhoneAndroid } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
export default function Contact() {
  return (
    <>
      
      <div className="flex flex-col md:flex-row justify-evenly mx-auto py-12 px-4 md:px-14 w-full gap-14 bg-gray-950 text-white ">
        <div className="flex flex-col  gap-2 w-full md:w-80 ">
          <h3 className="text-xl font-semibold">Yash's Portfolio</h3>
          <p className="text-lg text-gray-300">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p className="text-lg text-gray-300">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
          <div className="flex gap-6 pt-2">
           <a href="https://www.linkedin.com/in/yash-patil-abc7580" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="text-2xl cursor-pointer transition-all duration-300 hover:text-cyan-500 hover:scale-110" /></a>
           <a href="https://github.com/yashpatil-7580" target="_blank" rel="noopener noreferrer"> <FaGithub className="text-2xl cursor-pointer transition-all duration-300 hover:text-cyan-500 hover:scale-110" /></a>
          </div>
        </div>

        <div className="flex flex-col  gap-2 w-full md:w-80">
          <h3 className="text-xl font-semibold">Contact details</h3>
            <div className="text-lg">
              <p className="flex items-center gap-1.5"><IoMdMail /> yashpatil900596@gmail.com</p>
            <p className="flex items-center gap-1.5"><FcPhoneAndroid /> +91997xxxx596</p>
            <p className="flex items-center gap-1.5"><IoLocation /> Pune,Maharashtra</p>
            </div>
        </div>

        <div className="flex flex-col  items-start gap-2 w-full md:w-80">
          <h3 className="text-xl font-semibold">Send Message</h3>
          <input
            className="border h-10 rounded-2xl px-2 bg-gray-900 border-gray-700 focus:outline-none focus:border-cyan-400"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="border h-10 rounded-2xl px-2 bg-gray-900 border-gray-700 focus:outline-none focus:border-cyan-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <textarea
            className="rounded-xl h-24 border p-2 bg-gray-900 border-gray-700 focus:outline-none focus:border-cyan-300"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="transition-all duration-300 bg-cyan-400 hover:bg-cyan-300 hover:scale-105 active:scale-95 text-black font-semibold rounded-xl px-5 py-3 cursor-pointer w-max flex items-center gap-2 shadow-lg">
            Submit
          </button>
         
        </div>
        
      </div>
     {/* <hr className="border-t border-gray-300 py-4" />
      <div className="flex justify-center">
        <h3 className="text-xl font-semibold">
          Designed & Developed by Yash Patil
        </h3>
      </div> */}
      
    </>
  );
}
