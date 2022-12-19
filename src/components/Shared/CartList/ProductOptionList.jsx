import React from 'react'
import {FaPlus} from 'react-icons/fa'

function ProductOptionList({children}) {


  return (
    <>
      <div className='w-96 flex flex-row p-1 gap-x-2 cursor-pointer bg-white hover:bg-violet-600 font-extrabold text-yellow-300'>
        {children}
        </div>

    </>
  );
}

export default ProductOptionList