export default function AbRightcontent(){
    const skill=["Html CSS","Javascript","Java","React js","Node js","Express js","PostgreSQL"];
    return(
        <>
         <div className='flex flex-col gap-4 max-w-xl '>
         <h3 className='font-semibold text-lg tracking-wider text-cyan-500'>ABOUT ME</h3>
         <h2 className='font-bold text-2xl md:text-3xl'>Passionate Full Stack Developer</h2>
         <p className="leading-relaxed">I am a passionate Full Stack Developer with hands-on experience in building responsive and scalable web applications using React.js, Node.js, Express.js, and PostgreSQL. I enjoy creating clean user interfaces and developing efficient backend systems with REST APIs and database integration. Constantly learning and improving my skills, I am focused on building modern web solutions and growing as a software developer.</p>
         <p className="text-xl font-semibold">Skills:</p>
         
        <div className='flex flex-wrap gap-4'>
          {skill.map(function(elem,idx){
              
             return <div key={idx} className='border bg-cyan-100 border-solid border-cyan-300 w-max rounded-2xl px-3 py-1 font-semibold'> {elem}</div> 
          })}
           </div>
         
       </div>
       
       
        </>
    )
}