import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState('')

  const subscribeFn = (e) => {
    e.preventDefault();
    if(email.length === '' || email.length === undefined) {
      alert('please enter correct email')
    }
  }



  const readEmail = (e) => {
    setEmail(e.target.value)
  }



  return (
    <div className='container-width h-fit bg-slate-900 text-gray-400'>
      <div className='grid-cols-3 gap-x-20 grid justify-items-center p-8 '>
        <div className='grid-col-1 footer-bar'>
          <div className=''>
            <div className='text-center mb-2'>
              <h1>Hear It First</h1>
            </div>
            <div>
              <form
                action='https://formsubmit.co/00eae2eb6f9eb546a17a5437018042a1'
                method='POST'
              >
                <input
                  type='email'
                  name='email'
                  className='email'
                  placeholder='Enter email to subscribe'
                  size={33}
                  value={email}
                  onChange={readEmail}
                />
                <div className='text-center my-2'>
                  <button variant='contained' type='submit' className='btn'>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='grid-col-2'>
          <div className='grid gap-x-10 grid-cols-3'>
            <div className='grid gap-y-4 col-start-1'>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>Product Help</p>
              <p>Warranty</p>
            </div>
            <div className='grid col-start-3'>
              <span>About</span>
              <span>Careers</span>
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
      </div>

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