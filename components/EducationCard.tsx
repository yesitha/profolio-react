import React from 'react'
import {motion} from 'framer-motion'
import { Educations } from '../typing';
import { urlFor } from '../sanity';

type Props = {
  education:Educations;
}




const EducationCard = ({education}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] h-[600px]  md:w-[600px] xl:w-[700px] snap-center xl:bg-[#292929] md:bg-[#292929] px-10 mt-10 py-11 hover:opacity-100 opacity-75 cursor-pointer transition-opacity duration-200 overflow-hidden' >
        <motion.img 
        initial={{y:-100 ,opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        
        className='w-auto h-23 pt-6  xl:w-auto xl:h-[200px] object-cover object-center'
        src={urlFor(education?.instituteImage).url()}/>
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-bold'>{education?.institute}</h4>
            <p className='font-light text-1xl mt-1 text-gray-300'>{education?.degree}</p>
            <p className='uppercase py-1 text-gray-300'>{education?.dateStart} - {education.isCurrentlyWorkingHere?"Present":education?.dateEnd}</p>
            <ul className='list-disc space y-4 ml-5  text-sm xl:text-lg  '>

              
            {education.points?.map((point,index)=>(
                <li key={index}>{point}</li>
            ))}
            </ul>
        </div>
    </article>
  )
}

export default EducationCard