import { motion } from 'framer-motion'
import React, { PureComponent } from 'react'
import { PageInfo } from '../typing'

type Props = {
  
}

class About extends PureComponent<Props> {
  render() {
    return (
      <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      >
        <h3 className='absolute top-20 left-1/2 -translate-x-1/2 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 '>ABOUT</h3>
        <motion.img
        src="https://i.postimg.cc/Sxm90sS3/website-about-avatar.jpg"
        initial={{
            x:-200,
            opacity:0
           
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{x:0,opacity:1}}
        viewport={{once:true}}
        className="mb-1 mt-28 md:mb-0 flex-shrink-0 w-36 h-26 rounded-full object-cover md:rounded-lg md:wd-64 md:h-95 xl:w-[300px] xl:h-[400px] relative"
        />
        <div className='space-y-2 md:space-y-10 px-0  md:px-10'>
            <h4 className='hidden md:inline-flex md:text-4xl md:font-semibold'>Get to Know Me</h4>
            <p className='text-base justify-center '>I am Yesitha, a 25-year-old undergraduate at the University of Moratuwa in Sri Lanka. I am currently pursuing a BCS(Hons) in Information Technology and am dedicated to continuously improving my skills and knowledge in the field.I enjoy taking on challenges and achieving my goals. I am particularly interested in the opportunity to learn new technologies and find solutions in the field of IT. In my free time, I enjoy swimming and am passionate about finding solutions in the field of IT.</p>
        </div>
        </motion.div>
    )
  }
}

export default About