import img from "../assets/Yash_img.jpeg";
import AbRightcontent from "./AbRightcontent";
export default function About() {
  return (
    <>
      <div className="bg-linear-to-r from-cyan-50 to-blue-50 min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 px-4 sm:px-6 md:px-16 py-20 items-center mx-auto max-w-6xl ">
          <div className="w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-2xl border border-cyan-200 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={img}
              alt="My Image"
            />
          </div>
          <AbRightcontent />
        </div>
      </div>
    </>
  );
}
