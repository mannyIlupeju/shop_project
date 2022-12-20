import React from 'react'

const Footer = () => {
  const footerYear = new Date();
  const fullYear = footerYear.getFullYear()

  
  return (
    <div className='container-width mx-auto w-screen h-fit bg-slate-900 text-gray-400'>
      <div className='grid-cols-3 grid justify-items-center p-8'>
        <div className='grid-col-1'>
          <div>
            <h1>Hear It First</h1>
          </div>
        </div>
        <div className='grid-col-2'>
          <div className='grid gap-x-20 grid-cols-3'>
            <div className='grid gap-y-6 col-start-1'>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>Product Help</p>
              <p>Warranty</p>
            </div>
            <div className='grid gap-y-6 w-40 col-start-2'>
              <p>Custom Product</p>
              <p>Bulk Orders</p>
              <p>Press Releases</p>
              <p>Sound Advice</p>
            </div>
            <div className='grid col-start-3'>
              <span>About</span>
              <span>Careers</span>
            </div>
          </div>
        </div>
        <div className='grid-col-3'>
          <div>
            <h1>Follow Us</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center footer-bar'>
        <div>
          <p>Privacy Policy | Terms of Use</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Footer
