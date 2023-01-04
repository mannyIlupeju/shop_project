import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { shopItemList } from "../../../products/Products";
import { FaPlus, FaMinus } from "react-icons/fa";


function Cart({ saved, setSaved, value, setValue }) {


  const updateInCart = (quantity) => {
    return quantity+1
  }
  
  const reduceInCart = () => {

  }

  const removeItem = () => {
    
  }



  return (
    <>
      <div className='h-screen container mx-auto mb-40'>
        {saved.length !== 0 ? (
          <>
            <div className='text-center text-3xl text-gray-300 font-semibold mt-40'>
              <h1>Cart</h1>
            </div>

            <div>
              {/* //displaying the item the user selected by accessing the item from localStorage */}
              {saved.map((item) => {
                const { id, quantity, thumbnail, price, productTitle } = item;

                //remove item from cart
                const removeItem = () => {
                  let selectedItem = id;
                  let search = saved.filter((x) => x.id !== selectedItem);
                  console.log(search);
                  localStorage.setItem("saved", JSON.stringify(search));
                  window.location.reload();
                };

                return (
                  <div
                    key={id}
                    className='grid justify-center my-10 mt-20 w-fit bg-white p-4 rounded-full'
                  >
                    <div className='grid grid-cols-3 gap-x-28'>
                      <div className='col-start-1 w-fit'>
                        <div className='flex flex-row gap-x-5'>
                          <div className=''>
                            <img
                              src={thumbnail}
                              alt='product-image'
                              width={300}
                              id={id}
                            />
                          </div>
                          <div
                            className='font-semibold w-fit flex items-center'
                            id={id}
                          >
                            <h3>{productTitle}</h3>
                          </div>
                        </div>
                      </div>

                      <div className='col-start-2 w-fit grid items-center'>
                        <div className=''>
                          <h3 className='font-semibold'>Quantity: {quantity}</h3>
                        
                          <div className='w-fit'>
                            <h3 className='font-semibold'>Price: ${price}</h3>
                          </div>
                        </div>
                      </div>

                      <div
                        className='col-start-3 w-fit flex flex-col items-center justify-center'
                        id={id}
                      >
                        <div>
                          <h3 className='font-semibold'>${quantity * price}</h3>
                          <div className='mt-10'>
                            <p className='cursor-pointer' onClick={removeItem}>
                              Remove Item
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className='flex justify-end'>
                <div className="flex justify-center relative right-80 bg-white p-8 rounded-3xl">
                <h1>Total: </h1>
                <p className="ml-2 font-semibold">
                  $ 
                   {saved.reduce((total, item) => {
                    return total + item.quantity * item.price;
                  }, 0)}
                </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='flex flex-col mt-40 text-center text-gray-300 justify-center'>
            <h1 className='text-5xl'>Cart is Empty</h1>
            <div className='mt-10'>
              <Link to='/shop'>
                <button className='btn'>Back to Shop</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
