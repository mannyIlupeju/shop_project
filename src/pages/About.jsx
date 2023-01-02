import React from 'react'
import {motion} from 'framer-motion'

const aboutVariants = {
  hidden: {
    x:"-80",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: 'easeIn',
      type: "spring",
      stiffness: 20,
      staggerChildren: 0.8,
     
      
      
    }
  }
}

function About() {
  return (
    <>
      <div className='container-width h-screen'>
        <div className='mt-32 grid grid-cols-2 grid-rows-7 h-screen p-5'>
          <div className='col-start-1 col-span-1 row-start-1 row-span-4 aboutBanner3'></div>
          <div className='col-start-1 col-span-1 row-start-5 row-span-4 aboutBanner2 '></div>
          <div className='col-start-2 col-span-1 row-start-1 row-span-6 bg-white'>
            <div className='p-12'>
              <motion.div className='mb-12 text-lg font-bold'
              variants={aboutVariants}
              initial={'hidden'}
              animate={'visible'}>
                <p>About Us</p>
              </motion.div>
              <motion.div variants={aboutVariants}
              initial={'hidden'}
              whileInView={'visible'}
              viewport={{once:true}}>
                <h1 className='text-6xl font-extrabold'>
                  <span className='textGradient bg-clip-text'>
                    We believe in tuning in
                  </span>
                  , we don't believe in tuning out
                </h1>
              </motion.div>
              <div className='mt-12'>
                <motion.h2 className='font-semibold leading-loose'
                variants={aboutVariants}
                initial={'hidden'}
                animate={'visible'}>
                  We make products that connect us to music on a physical level.{" "}
                  <br />
                  Music is all about feeling. It's the soundtrack to our
                  celebrations. <br /> Our revolutions. And new creations.
                  <br />
                  We don't want you to just listen to music. <br /> We want you
                  to feel it.
                </motion.h2>
              </div>
            </div>
          </div>
          <div className='row-span-2 bg-black h-full w-full'></div>
        </div>
      </div>
    </>
  );
}

export default About


