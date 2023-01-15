import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Link from 'next/link';
import { Social } from '../typing';
type Props = {
  socials:Social[];
}

function Header({socials}: Props) {
    const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div className='flex flex-row items-center'
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.3,
            }}
            >
              {socials.map((social) => (
                <SocialIcon 
                key={social._id}
                url={social.url} target="_blank"
        fgColor='gray' 
        bgColor='transparent'/> 
              ))}
        
        </motion.div>
        <motion.div className='flex flex-row items-center text-grey-300'
        initial={{
            x: +500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.3,
        }}
        >
          {/* <DarkModeSwitch className='py-3'
      
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={50}
    /> */}
      
      <SocialIcon
            url='#contactME'
            className='cursor-pointer'
            network="email"
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm  text-gray-400'>Get In Touch</p>
    
            
            </motion.div>   
    </header>
  )
}

export default Header