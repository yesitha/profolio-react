import React from 'react'
import{motion} from 'framer-motion'
import EducationCard from './EducationCard'
import { Educations } from '../typing';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  educations:Educations[];
}

function Education({educations}: Props) {

  const preferredOrder = [
    "University of Moratuwa",
    "University of Colombo",
    "IJSE - Institute of Software Engineering",
    "Taxila Central College - Horana",
  ]

  const sortedEducations = educations.sort((a, b) => {
    const orderA = preferredOrder.indexOf(a?.institute)
    const orderB = preferredOrder.indexOf(b?.institute)

    
    return (orderA === -1 ? Infinity : orderA) - (orderB === -1 ? Infinity : orderB)
  })

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen overflow-hidden  md:text-left md:flex-row max-w-full mx-10 justify-evenly mx-auto items-center '>
  <h3 className='absolute top-20 uppercaset tracking-[20px] text-gray-500 text-2xl mb-10 z-10 '>EDUCATION</h3>
  {/* <div className='xl:w-5/6 w-full  flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60 pb-5 z-5'> */}
  <Swiper 
  className="xl:w-5/6 w-full pb-5"
  modules={[Navigation, Pagination, A11y]}
  spaceBetween={1}
  slidesPerView={1}  // Start with 1 slide per view for small screens
  navigation
  pagination={{ clickable: true }}
  
  
  breakpoints={{
    640: { slidesPerView: 1 }, // Mobile
    768: { slidesPerView: 2 }, // Tablets
    1024: { slidesPerView: 3 }, // Desktop
  }}
>
  {educations.map((education) => (
    <SwiperSlide key={education._id} className="w-full flex justify-center items-center">
      <EducationCard education={education} />
    </SwiperSlide>
  ))}
</Swiper>

    </motion.div>
  )
}

export default Education