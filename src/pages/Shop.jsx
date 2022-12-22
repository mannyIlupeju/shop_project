import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Shop = ({shopList}) => {
  return (
    <div className=' h-full container-width mx-auto w-screen sm:relative sm:left-10 text-gray-300'>
      <div className='mt-32'>
        <div className='font-extrabold text-center text-4xl p-10'>
          <h2>SHOP ALL</h2>
        </div>
        <div className='grid grid-cols-2 gap-y-10 p-10 -mt-5 text-sm 2xl:grid-cols-4 w-max 2xl:gap-x-40 gap-x-10 xl:grid mx-auto justify-center'>
          <Link to='/earbuds'>
            <button className='button-6 '>EARBUDS</button>
          </Link>
          <Link to='/headphones'>
            <button className='button-6 '>HEADPHONES</button>
          </Link>
          <Link to='/clothing'>
            <button className='button-6 '>CLOTHING</button>
          </Link>
          <Link to='/accessories'>
            <button className='button-6 '>ACCESSORIES</button>
          </Link>
        </div>

        <div>
          <div className='grid grid-cols-1 justify-items-center 2xl:grid-cols-3 gap-y-2 lg:gap-x-1 md:grid-cols-2 text-gray-300'>
            {shopList.map((items, index) => {
              // console.log(items.link)
              return (
                <div key={index} className='flex my-10'>
                  <Link to={items.link}>
                    <img
                      src={items.mainImage}
                      alt={items.alt}
                      width={320}
                      className='box-hover-zoom'
                    />
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
