
import React from 'react'
import { shopItemList } from '../Products';
import { Link, NavLink } from "react-router-dom";

function Earbuds() {
  let earbudProduct = shopItemList.filter((item)=> item.tags === 'earbuds')
  return (
    <div className='cursor-pointer bg-black grid-cols-1 mt-20'>
    <div className='grid grid-cols-2 gap-y-10 p-10 text-sm 2xl:grid-cols-4 w-max 2xl:gap-x-40 gap-x-10 xl:grid mx-auto justify-center'>
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
    <div className='grid grid-cols-1 justify-items-center 2xl:grid-cols-2 gap-y-2 lg:gap-x-1 md:grid-cols-2 cursor-pointer bg-black'>
      {earbudProduct.map((item) => {
        const { id, mainImage, price, desc, alt} = item;
        return (
          <>
            <div className='flex flex-col my-10'>
              <img
                src={mainImage}
                alt={alt}
                width={520}
                className='box-hover-zoom'
              />
            
            <div className='my-10'>
                <div className='flex justify-center'>
                  <h3>{desc}</h3>
                </div>
                <div className='flex justify-center'>
                  <span>{price}</span>
                </div>
            </div>
            </div>
          </>
        );
      })}
    </div>
    </div>
  );
}

export default Earbuds