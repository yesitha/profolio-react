import React from 'react'
import{motion} from 'framer-motion'
import EducationCard from './EducationCard'

type Props = {}

function Education({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen overflow-hidden  md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
  <h3 className='absolute top-20 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10'>EDUCATION</h3>
  <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-hide'>
  <EducationCard/>
  <EducationCard/>
  <EducationCard/>
  <EducationCard/>
  <EducationCard/>
  </div>

    </motion.div>
  )
}

export default Education