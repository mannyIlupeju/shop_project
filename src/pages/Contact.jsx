import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";
import Button from '../components/Shared/Button';


const Contact = () => {

  return (
    <div className='h-screen flex justify-center mb-20'>
      <div className='mt-40'>
        <div className='text-center'>
          <h1 className='text-2xl  font-semibold text-white'>Contact</h1>
        </div>
        <div className='my-4 w-fit'>
          <p className='text-white sm:text-xl  text-sm text-center'>
            After hours or want to send us an email? We're here to help. <br />{" "}
            Please fill out the form below and we'll be back in touch with you
            soon.
          </p>
        </div>

        <div className='flex justify-center mt-8'>
          <form>
            {/* Name */}
            <div className='flex flex-col text-center sm:flex-row gap-x-5'>
              <div className=''>
                <label htmlFor='fName' name='fName' className='text-white'>
                  Name:
                </label>
                <br />
                <input type='text' id='fname' name='fname' />
                <br />
              </div>
              <div className='mt-5 sm:mt-0'>
                <label className='text-white'>Last Name:</label>
                <br />
                <input type='text' id='lname' name='lname' />
              </div>
            </div>

            {/* Email  */}
            <div className='flex flex-col text-center sm:flex-row gap-x-5 mt-5'>
              <div>
                <label htmlFor='email' name='email' className='text-white'>
                  Email:
                </label>
                <br />
                <input type='email' id='email' name='email' />
                <br />
              </div>
              <div className='mt-5 sm:mt-0'>
                <label htmlFor='email' name='email' className='text-white'>
                  Confirm Email Address:
                </label>
                <br />
                <input type='email' id='email' name='email' />
                <br />
              </div>
            </div>

            {/* Phone Number */}
            <div className='mt-5 text-center sm:text-left'>
              <label htmlFor='Phone number' name='phone' className='text-white'>
                Phone:
              </label>
              <br />
              <input type='tel' id='phone' name='phone' />
            </div>

            {/* Order Number  */}
            <div className='mt-5 text-center sm:text-left'>
              <label htmlFor='Order Number' name='order' className='text-white'>
                Order Number:
              </label>
              <br />
              <input type='text' id='order' name='order' />
            </div>

            {/* Message */}
            <div className='mt-8 '>
              <label htmlFor='messages' name='message' className='text-white'>
                Additional Details:
              </label>
              <br />
              <textarea id='messages' name='messages' cols='50' rows={4} />
            </div>

            <div className='flex justify-center mt-8'>
              <Button type='submit' className='btn'>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
