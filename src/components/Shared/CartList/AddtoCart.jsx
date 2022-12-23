import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function AddtoCart({}) {
 
  const [value, setValue] = useState(0);

  console.log(value)



  //Increase amount functionality
  const updateAmount = () => {
    setValue((prevCount) => prevCount + 1);
  };

  //Reduce amount
  const reduceAmount = () => {
    if (value > 0) {
      setValue((prevCount) => prevCount - 1);
    } else {
      setValue(0);
    }
  };

  //Setting cart input
  // const updateCart= () => {
  //   setCart({
  //     quanity: counter,

  //   })
  //   console.log(counter)
  // }


  

  return (
    <>
      {/* Add to cart */}
      <div className='flex flex-row gap-x-2 my-3'>
        <div>
          <button className='button-6' onClick={updateAmount}>
            <FaPlus />
          </button>
        </div>

        <div>
          <input
            id='quantity'
            className='input input-info input-md w-20 h-60 max-w-xs'
            value={value}
            onChange={updateAmount}
          />
        </div>

        <div>
          <button className='button-6' onClick={reduceAmount}>
            <FaMinus />
          </button>
        </div>
      </div>
      <div>
        <button
          className='btn'
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
}

export default AddtoCart;
