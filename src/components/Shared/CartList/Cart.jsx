import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { shopItemList } from "../../../products/Products";
import { FaPlus, FaMinus } from "react-icons/fa";


function Cart({ saved, setSaved, value, setValue }) {
  
  const updateInCart = (quantity) => {
   
  }
  
  const reduceInCart = () => {

  }

  console.log(value)


  return (
    <>
      <div className='h-screen'>
        {saved.length !== 0 ? (
          <>
            <div className='text-center font-semibold mt-40'>
              <h1>Cart</h1>
            </div>

            {/* //displaying the item the user selected by accessing the item from localStorage */}
            {saved.map((item) => {
              const { id, quantity, thumbnail, price, productTitle } = item;
              //if the item already exists in the cart, display an alert message
              // let search = shopItemList.find((x) => x.name === productTitle) || [];
              
        
                return (
                  <div key={id} className='grid justify-center my-10 mt-20'>
                    <div className='grid grid-cols-3 gap-x-20'>
                      <div className='col-start-1'>
                        <div className='flex flex-row gap-x-5'>
                          <div className=' w-fit'>
                            <img
                              src={thumbnail}
                              alt='product-image'
                              width={100}
                              id={id}
                            />
                          </div>
                          <div className='w-20 font-semibold' id={id}>
                            <h3>{productTitle}</h3>
                          </div>
                        </div>
                      </div>

                      <div className='col-start-2'>
                        <div id={id}>
                          <div>
                            <h3 className="font-semibold">Quantity:</h3>
                            <div className='flex gap-x-2'>
                              <div
                                className='relative top-2 cursor-pointer'
                                onClick={updateInCart}
                                id={id}
                              >
                                <FaPlus />
                              </div>

                              <div className='bg-white w-fit'>
                                <div className='p-2'>
                                  <h1>{quantity}</h1>
                                </div>
                              </div>

                              <div
                                className='relative top-2 cursor-pointer'
                                onClick={reduceInCart}
                              >
                                <FaMinus />
                              </div>
                            </div>
                          </div>
                          <div id={id}>
                            <h3 className="font-semibold">Price: ${price}</h3>
                          </div>
                        </div>
                      </div>

                      <div className='col-start-3' id={id}>
                        <div>
                          <h3 className="font-semibold">${quantity * price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              
            })}
          </>
        ) : 
        
        (
          <div className='flex flex-col mt-40 text-center justify-center'>
            <h1 className='text-5xl'>Cart is Empty</h1>
            <div className='mt-10'>
              <Link to='/shop'>Back to Shop</Link>
            </div>
          </div>
        )
        
        }
      </div>
    </>
  );
}

export default Cart;
