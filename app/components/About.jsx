import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const About = ({darkmode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20' 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'     
        initial={{ opacity: 0,y:-20 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{ duration: 0.5,delay:0.3 }}>Introduction</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'         
        initial={{ opacity: 0,y:-20 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{ duration: 0.5,delay:0.5 }}>About me</motion.h2>


        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
            <motion.div 
        initial={{ opacity: 0,scale:0.9 }}
        whileInView={{ opacity: 1,scale:1 }}
        transition={{ duration: 0.6,delay:0.6}}
            className='w-64 sm:w-60 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div className='flex-1 '
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6,delay:0.6}}
            >
                <p className='mb-10 max-w-2xl font-Ovo'>I am an experienced Frontend Developer with over a decade of Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quaerat ad, repudiandae nostrum voluptates soluta. Excepturi, voluptate! Quisquam ut, eaque cum esse fugiat saepe sapiente ad delectus quo deleniti. Nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quae error</p>
            <motion.ul 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8,delay:1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark,title,description},index)=>(
                    <motion.li 
                    whileHover={{scale:1.05}}
                    key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                        <Image src={darkmode?iconDark:icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-500 dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4 
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.5,duration:0.6}}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I Use</motion.h4>
            <motion.ul 
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8,delay:1}}
            className='flex items-center gap-3 sm:gap-5'>
                {toolsData?.map((tool,index)=>(
                    <motion.li 
                    whileHover={{scale:1.1}}
                    key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 '>
                        <Image src={tool} alt='' className='w-7 sm:w-9'/>
                    </motion.li>
                ))}
            </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About