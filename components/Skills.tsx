import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typing';
type Props = {
  skills:SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 left-1/2 -translate-x-1/2 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 '>SKILLS</h3>

       {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current profieciency</h3>*/}
        <div className='absolute top-40 xl:top-44 grid grid-cols-4 xl:grid-cols-6 gap-0.5 xl:gap-4'>
             {skills?.map((skill)=>(
              <Skill key={skill._id} skill={skill}/>
             ))}

             
           
        </div>
    </motion.div>
  )
}

export default Skills