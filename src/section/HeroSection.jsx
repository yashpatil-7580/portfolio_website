import img from '../assets/img.jfif'
import LeftContent from './Leftcontent'
export default function HeroSection(){
    return(
        <>
       <div className="bg-[url('./assets/bg_img.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">

          <div className='relative overflow-hidden '> 
            <div className='px-4 sm:px-6 md:px-12 py-10 gap-8 md:gap-16 m-auto  max-w-7xl flex flex-col md:flex-row justify-between items-center'>
                  <LeftContent/>
              <div className='flex-1 flex justify-center'>
                  <img className='w-3/4 md:w-1/2 lg:w-125 rounded-3xl shadow-2xl' src={img} alt="my img"/>
              </div>
            </div>
          </div>

      </div>
        </>
    )
}


 