import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const EducationCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
        <motion.img 
        initial={{y:-100 ,opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://i.postimg.cc/X7HJSWnL/University-of-Moratuwa-logo-3.png'/>
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-bold'>University Of Moratuwa</h4>
            <p className='font-light text-1xl mt-1 text-gray-300'>BSC(Hons) in Information Technology</p>
            <ul className='list-disc space y-4 ml-5 text-lg'>
             <li>Summery Point</li>
             <li>Summery Point</li>
             <li>Summery Point</li>
            </ul>
        </div>
    </article>
  )
}

export default EducationCard