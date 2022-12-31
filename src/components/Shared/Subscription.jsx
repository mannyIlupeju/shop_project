import React from 'react'
import { FaTimes } from 'react-icons/fa'

//generate subscription modal 
function Subscription({message, setMessage}) {
  return (
    <div>
      <div>
        {message === 'OK' ? 
        (<div className='bg-white rounded-xl w-fit h-fit p-6 relative z-20 bottom-40 translate-y-2/4 ml-5'>
          <div className='relative top-2'>
          <h1>Thanks for subscribing!</h1>
          </div>
          <div className='relative bottom-10 left-40 cursor-pointer'>
            <FaTimes size={20} onClick={()=>{
              setMessage(null)
            }}/>
          </div>
        </div>) : ''}
      </div>
    </div>
  )
}

export default Subscription