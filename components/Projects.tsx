import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typing';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
    projects:Project[];
}

function Projects({projects}: Props) {
    
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
  >
    
        <h3 className='absolute top-20 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 '>PROJECTS</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60 '>
        {projects.map((project)=>(
            
            
            <div 
key={project._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                
                
                    
                <motion.img
                
                className=' b-1 mt-28 md:mb-0  w-auto h-2/5   md:rounded-lg md:wd-auto md:h-2/5 xl:w-auto xl:h-3/5 relative max-h-[600px] pt-2'
                initial={{y:-300,opacity:0}}
                transition={{duration:1.2}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true}}
                src={urlFor(project?.Image).url()}
                
                />
                
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <Link href={`${project?.linkToBuild}`} target="_blank">
                    <h4 className='text-2xl font-semibold text-center'>{project?.title}</h4>
                </Link>
                    <div className='flex items-center space x-2 justify-center'>
                        {project?.technologies.map((technology)=>(
                            <img
                            key={technology._id}
                            className='h-10 w-10 md:h-14 md:w-14 p-1'
                            src={urlFor(technology.Image).url()}
                            />

                        ))}
                    </div>
                    <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                </div>
            </div>
        ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[350px] skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Projects