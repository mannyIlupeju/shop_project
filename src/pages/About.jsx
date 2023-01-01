import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <>
    <div className='container-width h-screen'> 
      <div className='mt-32 grid grid-cols-2 grid-rows-7 h-screen p-5'>
        <div className='col-start-1 col-span-1 row-start-1 row-span-4 aboutBanner3'></div>
        <div className='col-start-1 col-span-1 row-start-5 row-span-4 aboutBanner2 '></div>
        <div className='col-start-2 col-span-1 row-start-1 row-span-6 bg-white'>
          <div className='p-12'>
            <motion.div>
              <h1 className='text-6xl font-extrabold'>We believe in tuning in, we don't believe in tuning out</h1>
            </motion.div>
            <div className='mt-12'>
              <h2 className='font-semibold leading-loose'>We make products that connect us to music on a physical level. <br/>
                Music is all about feeling. It's the soundtrack to our celebrations. <br/> Our revolutions. And new creations.<br/>
                We are HeadBanging. We don't want you to just listen to music. We want you to feel it.
              </h2>
            </div>
          </div>
        </div>
        <div className='row-span-2 bg-black h-full w-full'>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default About


