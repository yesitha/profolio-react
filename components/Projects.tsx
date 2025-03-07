import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typing';
import { urlFor } from '../sanity';
import Link from 'next/link';
import { Github } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { useState, useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
    projects:Project[];
}

function Projects({projects}: Props) {

    const customOrder = ["Microservices-based", "Online", "Procurement","SmartHomeX","Smart","ICT","ITQA"]; 

    const sortedProjects = [...projects].sort((a, b) => {
        // Ensure the title exists
        const titleA = a?.title ?? "";
        const titleB = b?.title ?? "";
    
        // Extract the first word safely
        const firstWordA = titleA.trim().split(/\s+/)[0]; // Handles multiple spaces
        const firstWordB = titleB.trim().split(/\s+/)[0];
    
        const indexA = customOrder.indexOf(firstWordA);
        const indexB = customOrder.indexOf(firstWordB);
    
        // If both are in the custom order, compare their indices
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
    
        // If one is in the custom order, keep it before the others
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
    
        // If neither are in the custom order, sort alphabetically (case insensitive)
        return titleA.localeCompare(titleB, "en", { sensitivity: "base" });
    });
   
   

   
    
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
  >
    
        <h3 className='absolute top-20 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 '>PROJECTS</h3>
        {/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60 '> */}
    
        <Swiper className='w-full'
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={2}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true } }
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
      
    >
        {sortedProjects.map((project)=>(
            
            <SwiperSlide    key={project._id} >
            <div 
         
            className='min-w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                
                
                 
                <motion.img
                
                className=' b-1 mt-10 xl:mt-28 md:mb-0 mb-2 w-auto h-3/6   md:rounded-lg md:wd-auto md:h-2/5 xl:w-auto xl:h-3/5 relative  pt-10 max-w-none max-h-36 xl:max-h-96'
                initial={{opacity:0,y:-100}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                src={urlFor(project?.Image).url()}
                
                />
                
                
                <div className='space-y-2 xl:space-y-10 px-0 md:px-10 max-w-6xl'>
                <Link href={`${project?.linkToBuild}`} target="_blank">
                    <h5 className='text-xl xl:text-2xl font-semibold text-center'>{project?.title}</h5>
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
                    <p className='text-sm xl:text-lg text-center xl:text-left'>{project?.summary}</p>
                    <Link href={`${project?.linkToBuild}`} target="_blank">
                <div className='flex items-center justify-center space-x-2 pt-5'>
                    <button 
                        className="flex items-center space-x-2 px-2 md:px-4 py-2 border border-[#FFE55C]/40 rounded-full uppercase text-xs tracking-widest text-[#FFE55C]/40 transition-all md:border-[#242424] md:text-gray-500 md:hover:border-[#FFE55C]/40 md:hover:text-[#FFE55C]/40 xl:mx-2"
                    >
                        <Github className="w-4 h-4 md:w-5 md:h-5 transition-all" />
                        <span>GitHub Repo</span>
                    </button>
                </div>
            </Link>
                    
                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>  
        <div className='w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[350px] skew-y-12'>

        </div>
       
        
            
    </motion.div>
  )
}

export default Projects