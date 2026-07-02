export default function ProjectCard(props) {
  return (
    <>
      <div className="group border border-cyan-100 shadow-md  w-full max-w-lg  overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="h-48 overflow-hidden">
          <img
            className="w-full h-full transition-all duration-300 group-hover:scale-105 object-cover text-2xl bg-linear-to-r from-blue-400 to-cyan-100"
            src={props.image}
            alt="Task App"
          />
        </div>
         <h2 className="text-2xl font-semibold p-4">{props.title}</h2>
        <div className="block hover:-translate-y-1 hover:shadow-xl">

          <div className="flex flex-col gap-4 p-4 ">
            <p>{props.description}</p>
            <div className="flex flex-wrap gap-2">
              {props.techStack.map((skill, idx) => {
                return (
                  <span
                    key={idx}
                    className="border bg-cyan-50 border-solid border-cyan-300 w-max rounded-2xl px-3 py-1 font-semibold "
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
            <div className="flex gap-4 mt-2">
              <a 
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-cyan-300 bg-cyan-100 font-semibold transition-all duration-300 hover:bg-cyan-200 cursor-pointer hover:scale-105">
                GitHub
              </a>
              <a
              href={props.livedemo}
              target="_blank"
              rel="noopener noreferrer"
               className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold transition-all duration-300 hover:bg-cyan-600 cursor-pointer hover:scale-105">
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
