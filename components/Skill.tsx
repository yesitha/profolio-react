import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typing';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?:boolean;
    skill:Skill;
}

function Skill({directionLeft,skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x:directionLeft? -200:200,
            opacity:0}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            src={urlFor(skill?.Image).url()}
            className='rounded-full border-gray-500 object-cover w-24 h-24  md:h-28 md:w-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0  transition duration-300 ease-in-out  h-24 w-24  md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                
            </div>
        </div>
    </div>
  )
}

export default Skill