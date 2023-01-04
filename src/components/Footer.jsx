import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import {motion} from 'framer-motion'



const Footer = ({message, setMessage}) => {
  //Email State
  const [email, setEmail] = useState("");

  
  //Contact form
  const form = useRef();
  
  
  //subscription function
  const subscribeFn = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_38rwxo3",
        "template_bxqifjn",
        form.current,
        "uU1BC1LZILc0BENN2"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text) {
            setMessage(result.text);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //read email in input field
  const readEmail = (e) => {
    setEmail(e.target.value);
  };

  //Footer Animation
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: "60",
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className='container-width h-fit bg-slate-900 text-gray-400'>
      <motion.div
        className='flex sm:flex-row flex-col justify-around p-5 gap-y-8'
        variants={footerVariants}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false }}
      >
        <div className='col-start-1 row-start-1 footer-bar'>
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
        <div className=''>
          <div className=''>
            <div className=''>
              <p>About</p>
              <p>Careers</p>
            </div>
          </div>
        </div>
        <div className='col-start-3 '>
          <div>
            <div className='sm:text-center'>
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