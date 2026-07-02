import task from "../assets/task.jpg";
import portfolio from "../assets/image.png";
import ProjectCard from "./ProjectCard";
export default function Project() {
  const projects = [
    {
      title: "Task Management API",
      description:
        "A full-stack task management application with JWT authentication, PostgreSQL integration, and CRUD functionality.",
      techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
      image: task,
      github:"https://github.com/yashpatil-7580/task-management-api",
      livedemo:"https://task-management-api-l4nv.onrender.com/",

    },
    {
      title: "Portfolio Website",
      description:
        "A full-stack task management application with JWT authentication, PostgreSQL integration, and CRUD functionality.",
      techStack: ["React", "Tailwind CSS"],
      image: portfolio,
      github:"https://github.com/yashpatil-7580/portfolio_website",
      livedemo:"https://yashpatil-dev.vercel.app/",
    },
  ];
  return (
    <>
      <div id="project" className="bg-linear-to-r from-cyan-50 via-white to-cyan-50 min-h-screen ">
        <div className="flex flex-col mx-auto py-12 max-w-6xl gap-6  ">
          <h3 className="text-xl font-semibold">Projects</h3>
          <h2 className="text-2xl font-bold">Things I've Built</h2>

          <div className="flex flex-wrap gap-6 justify-center items-start">
            {projects.map((elem, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  image={elem.image}
                  title={elem.title}
                  description={elem.description}
                  techStack={elem.techStack}
                  github={elem.github}
                  livedemo={elem.livedemo}
                />
              );
            })}
          </div> 
        </div>
      </div>
    </>
  );
}
