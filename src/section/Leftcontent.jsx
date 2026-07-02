import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
export default function LeftContent() {
  return (
    <>
      <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start ">
        <div>
          <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi There, I'm Yash Patil
          </h2>
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            I am into{" "}
            <span className="text-orange-500">
              <TypeAnimation
                sequence={[
                  "MERN Stack Development",
                  2000,
                  "Full Stack Development",
                  2000,
                  "Backend Development",
                  2000,
                  "React Development",
                  2000,
                  "Building Scalable Applications",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4  ">
          <a
            href="/YASH_PATIL_Developer_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-500 bg-cyan-500 hover:bg-cyan-400 hover:scale-105 active:scale-95 text-black font-semibold rounded-xl px-5 py-3 cursor-pointer w-max flex items-center gap-2 shadow-lg"
          >
            Resume
            <IoMdDownload className="text-xl" />
          </a>

          <a
            href="#project"
            className="transition-all duration-500 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-105 active:scale-95 font-semibold rounded-xl px-5 py-3 cursor-pointer w-max"
          >
            View Projects
          </a>
          <div className="flex gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/yash-patil-abc7580"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl cursor-pointer transition-all duration-500 hover:text-cyan-500 hover:scale-110" />
            </a>
            <a
              href="https://github.com/yashpatil-7580"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl cursor-pointer transition-all duration-500 hover:text-cyan-500 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
