export default function Navbar(){
    return(
        <>
        <div className="bg-black flex items-center justify-between px-5 py-7 text-white">
            <h1 className="font-bold text-xl">Yash</h1>
            <div className="flex gap-6 text-xl ">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/project">Projects</a>
                <a href="/education">Education</a>
            </div>
        </div>
        </>
    )
}