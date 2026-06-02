import task from "../assets/task.jpg";
import ProjectCard from "./ProjectCard";
export default function Project() {
  const projects = [
    {
      title: "Task Management API",
      description:
        "A full-stack task management application with JWT authentication, PostgreSQL integration, and CRUD functionality.",
      techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
      image: task,
    },
    {
      title: "Portfolio Website",
      description:
        "A full-stack task management application with JWT authentication, PostgreSQL integration, and CRUD functionality.",
      techStack: ["React", "Tailwind CSS"],
      image: task,
    },
  ];
  return (
    <>
      <div className="bg-linear-to-r from-cyan-50 via-white to-cyan-50 min-h-screen">
        <div className="flex flex-col mx-auto py-12 max-w-6xl gap-6  ">
          <h3 className="text-xl font-semibold">Projects</h3>
          <h2 className="text-2xl font-bold">Things I've Built</h2>

          <div className="flex gap-6 items-start">
            {projects.map((elem, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  image={elem.image}
                  title={elem.title}
                  description={elem.description}
                  techStack={elem.techStack}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
