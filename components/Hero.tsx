import Link from 'next/link';
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from '../typing';
import BackgroundCircles from './BackgroundCircles';

type Props = {

  pageInfo:PageInfo;
}

function Hero({pageInfo}: Props) {
   
    const [text,count]=useTypewriter({words: [`ආයුබෝවන් !  Hello !  Bonjour !` ,` I'm Yesitha Sathsara Athukorala`,`<IT Major Undergraduate/>`,`An Avid Swimmer`],loop:true,delaySpeed:2000});
  return (
    <div className="h-screen flex flex-col space-y-8 md:space-y-0 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />
    <img
      className="relative rounded-full h-32 w-32 mx-auto object-cover border border-[#333333] "
       src={'https://i.postimg.cc/CKtmZNMg/Memoji-avatar.png'}
      alt="Yesitha Sathsara Memoji"
    />

    <div className="z-20">
      <h2 className="
      tracking-[10px]
      text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px]">
        SOFTWARE DEVELOPER
      </h2>
      <h1 className="text-[22px] pb-12 h-8 px-2
      sm:pb-8 sm:h-24 lg:h-32 2xl:h-1/3
       sm:text-5xl lg:text-3xl font-semibold sm:px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#FFE55C" />
      </h1>

      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#Education Qualifications">
          <button className="heroButton">Education</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
    <div className="container  sticky">
  <div className='hidden-class '><br/><br/><br/><br/></div>
    
  <div className='text'>Scroll Down</div>
  
</div>
  </div>
  )
}

export default Hero