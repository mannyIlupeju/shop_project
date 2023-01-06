import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {motion} from  'framer-motion'

const imageVariants = {
  initial: {
    scale: 0,
  },
  visible: {
    scale: 1.2,
  },
};

const Shop = ({shopList}) => {
  return (
    <div className=' h-full container-width mx-auto w-screen sm:relative sm:left-10 text-gray-300'>
      <div className='mt-32'>
        <div className='font-extrabold text-center text-4xl p-10'>
          <h2>SHOP ALL</h2>
        </div>
        <div className='grid grid-cols-1 relative -left-6 gap-y-10 p-10 -mt-5 text-sm sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 w-max 2xl:gap-x-40 gap-x-10 xl:grid mx-auto justify-center'>
          <Link to='/earbuds'>
            <button className='button-6 '>EARBUDS</button>
          </Link>
          <Link to='/headphones'>
            <button className='button-6 '>HEADPHONES</button>
          </Link>
          <Link to=''>
            <button className='button-6 '>CLOTHING</button>
          </Link>
          <Link to='/accessories'>
            <button className='button-6 '>ACCESSORIES</button>
          </Link>
        </div>

        <div>
          <div className='container mx-auto grid grid-cols-1 justify-center 2xl:grid-cols-3 relative -left-1 gap-y-2 lg:gap-x-1 md:grid-cols-2 text-gray-300'>
            {shopList.map((items, index) => {
              // console.log(items.link)
              return (
                <div key={index} className='flex justify-center my-10'>
                  <Link to={items.link}>
                    <motion.div variants={imageVariants} whileHover='visible'>
                      <img
                        src={items.mainImage}
                        alt={items.alt}
                        width={320}
                        className='box-hover-zoom'
                      />
                    </motion.div>

                      <div className='flex flex-row justify-center'>
                        <img src={items.altImage1} width={80} />
                        <img src={items.altImage2} width={80} />
                        <img src={items.altImage3} width={80} />
                      </div>

                    <div className='flex justify-center'>
                      <h3 className=' font-bold'>{items.desc}</h3>
                    </div>
                    <div className='flex justify-center'>
                      <span className=' font-bold'>${items.price}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop
