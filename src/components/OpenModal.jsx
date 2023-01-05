
import React, {useState, useEffect, useRef} from 'react'
import emailjs from "@emailjs/browser";

import { FaTimes } from 'react-icons/fa'

function OpenModal({
  modal,
  openModal,
  setButtonModal,
  setOpenModal,
  message,
  setMessage
}) {
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setOpenModal(!openModal);
    setButtonModal(false);
  };

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



  return (
    <>
      {modal ? (
        <div className='ml-5'>
          <div className='btn fixed bottom-2 z-50' onClick={toggleModal}>
            <h3>GET 20% OFF NOW</h3>
            <div className='relative -top-3 left-2'>
              <FaTimes
                size={13}
                onClick={() => {
                  setButtonModal(true);
                }}
              />
            </div>
          </div>
        </div>
      ) : null}

      {openModal ? (
        <div className='w-4/12 bg-black text-gray-300 shadow-xl sticky z-50 bottom-40 left-1/3 right-1/3 p-12'>
          <div>
            <FaTimes
              className='absolute top-4 right-4 cursor-pointer xl'
              onClick={() => {
                setOpenModal(!openModal);
                setButtonModal(!modal);
                document.body.style.overflowY = "auto";
              }}
            />
            <div className='my-5'>
              <h2 className=' text-center text-3xl font-extrabold'>
                GET 20% OFF NOW
              </h2>
            </div>
          </div>

          <div className='w-70 m-auto text-center'>
            <h3>WHEN YOU SIGN UP FOR EMAILS AND TEXTS</h3>
            <p className='text-xs mt-2'>
              Discount valid on full-price items only - cannot be combined with
              other offers or discounts
            </p>
          </div>

          <div className='my-4'>
            <p className='text-xs font-small'>
              By submitting this form, you agree to receive email marketing
              messages from us at the submitted email address. You can withdraw
              your consent at any time by following the unsubscribe instructions
              in any email we send to you.
            </p>
          </div>

          <div className='flex justify-center'>
            <div className='my-4'>
              <form ref={form} onSubmit={subscribeFn}>
                <input
                  type='email'
                  id='email'
                  style={{ width: "20.75rem" }}
                  required
                  value={email}
                  onChange={readEmail}
                />
              </form>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='btn' style={{ width: "18.75rem" }}>
              CONTINUE
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default OpenModal