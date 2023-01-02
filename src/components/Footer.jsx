import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState, useEffect,useRef } from "react";
import {motion} from 'framer-motion'



const Footer = ({message, setMessage, subscribeFn, email, setEmail, readEmail, form}) => {
  
  //Footer Animation
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: "60",
    },
    visible: {
      y: 0,
      opacity:1,
      transition: {
        duration: 1,
        ease: 'easeIn',
      }
    }
  }


  return (
    <div className='container-width h-fit bg-slate-900 text-gray-400'>
      <motion.div className='grid-cols-3 gap-x-20 grid justify-items-center p-8'
      variants={footerVariants}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{once: false}}
      >
        <div className='grid-col-1 footer-bar'>
          <div className=''>
            <div className=' mb-2'>
              <h1>Hear It First</h1>
            </div>
            <div>
              <form ref={form} onSubmit={subscribeFn}>
                <input
                  type='email'
                  name='email'
                  className='email'
                  placeholder='Enter email to subscribe'
                  size={20}
                  value={email}
                  onChange={readEmail}
                />
                <div className='my-2'>
                  <button
                    variant='contained'
                    type='submit'
                    value='Send'
                    className='btn'
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='grid-col-2'>
          <div className='grid grid-cols-3'>
            <div className='grid gap-y-4 col-start-1'>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>Product Help</p>
              <p>Warranty</p>
            </div>
            <div className='grid col-start-3'>
              <p>About</p>
              <p>Careers</p>
            </div>
          </div>
        </div>
        <div className='grid-col-3'>
          <div>
            <div className='text-center'>
              <h1>Follow Us</h1>
            </div>
            <div className='flex flex-row gap-x-5 my-4'>
              <span>
                <FaTwitter size={24} />
              </span>
              <span>
                <FaInstagram size={24} />
              </span>
              <span>
                <FaFacebook size={24} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className='flex flex-row justify-center w-screen items-center footer-bar'>
        <div>
          <p>Privacy Policy | Terms of Use</p>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default Footer;