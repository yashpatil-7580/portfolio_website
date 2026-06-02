export default function Skills(){
    const Frontend= [
    {
      "name": "HTML",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
      "name": "CSS",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
      "name": "Bootstrap",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
      "name": "Tailwind CSS",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      "name": "React js",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      "name": "Node js",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    {
      "name": "Express js",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
     {
      "name": "Core Java",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
      "name": "JavaScript",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
      "name": "PostgreSQL",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    },
    {
      "name": "VS Code",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
    },
    {
      "name": "Git",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
      "name": "Postman",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
      "name": "Supabase",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
    }
  ]
  

    return(
        <>
        <div className="py-24 bg-linear-to-br from-slate-50 via-cyan-50 to-blue-50">
          <div className="flex flex-col  gap-6 max-w-6xl mx-auto py-12  ">
            <h3 className="text-xl font-semibold accent-cyan-200 ">SKILLS</h3>
            <h2 className="text-2xl font-bold">Technologies I Work With :<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2"></div></h2>
            
            <div className=" flex flex-col gap-4 ">

                <div className="flex flex-wrap gap-4 justify-center">
                   {Frontend.map(function(elem,idx){
                    return  <div key={idx} className="border border-cyan-100 bg-cyan-100 w-32 items-center px-6 py-4 rounded-xl shadow-sm flex flex-col  gap-3 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <img className="rounded-lg  w-12 h-12 " src={elem.image} alt="" />
                        <p className="text-sm font-semibold">{elem.name}</p>
                    </div>
                   })}
                </div>

            </div>
            
        </div>
        </div>
        
        
        </>
    )
}


