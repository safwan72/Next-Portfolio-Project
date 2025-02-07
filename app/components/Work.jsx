import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react';
import { motion } from "motion/react";


const Work = ({darkmode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}  
    
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 className="text-center mb-2 text-lg font-Ovo"
              initial={{ opacity: 0,y:-20 }}
              whileInView={{ opacity: 1,y:0 }}
              transition={{ duration: 0.5,delay:0.3 }}
      
      >My Portfolio</motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo"
                    initial={{ opacity: 0,y:-20 }}
                    whileInView={{ opacity: 1,y:0 }}
                    transition={{ duration: 0.5,delay:0.5 }}
      >My Latest Work</motion.h2>
      <motion.p 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5,delay:0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo officiis
        beatae esse iusto voluptates ipsam officia nemo, veniam possimus
        nesciunt modi ratione inventore eligendi unde, animi pariatur?
        Excepturi, sapiente dignissimos.
      </motion.p>


      <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6,delay:0.9 }}
      className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData?.map((work,index)=>(
            <motion.div 
            whileHover={{scale:1.09}}
            transition={{duration:0.3}}
            key={index} style={{backgroundImage:`url(${work?.bgImage})`}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div >
                    <h2 className='font-semibold'>{work?.title}</h2>
                    <p className='tex-sm text-gray-800'>{work?.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets?.send_icon} alt='' className='w-5'/>
                </div>
                </div>
            </motion.div>
        ))}
      </motion.div>
      <motion.a 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3,delay:1.1 }}
      href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show More <Image src={darkmode?assets.right_arrow_bold_dark:assets?.right_arrow_bold} alt='' className='w-4'/>
      </motion.a>
    </motion.div>
  )
}

export default Work