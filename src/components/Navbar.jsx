import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-black flex items-center justify-between px-5 py-7 text-white">
        <h1 className="font-bold text-xl">Yash</h1>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <IoMdMenu />
        </button>
        <div className="hidden md:flex gap-6 text-xl  ">
          <a
            href="/"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#project"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#education"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
          >
            Education
          </a>
          
        </div>
       
      </div>
       {open && (
          <div className="md:hidden flex flex-col gap-4 bg-black text-white px-5 py-4">
            <a href="/">Home</a>
            <a  href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#project" onClick={() => setOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setOpen(false)}>Education</a>
          </div>
        )}
    </>
  );
}
