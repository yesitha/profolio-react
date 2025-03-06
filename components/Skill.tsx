import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typing';
import { urlFor } from '../sanity';

type Props = {
    
    skill:Skill;
}

function Skill({skill}: Props) {
  return (
    <div className='group relative flex hover:opacity-100 opacity-70 transition-opacity duration-200 '>
        <motion.img
          initial={{
            
            opacity:0}}
            transition={{duration:1}}
            whileInView={{opacity:1}}
            src={urlFor(skill?.Image).url()}
            className=' border-gray-500 object-cover w-20 h-20  md:h-28 md:w-28 xl:w-30 xl:h-30 filter ml-2 mr-2 '
        />
        {/*<div className='absolute opacity-0  transition duration-300 ease-in-out  h-24 w-24  md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full '>
                
            </div>
          </div>*/}
    </div>
  )
}

export default Skill