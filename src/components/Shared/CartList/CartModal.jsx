import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagPlusFill } from "react-icons/bs";

function CartModal({ saved }) {
console.log(saved)
let itemQuantity = saved.map((x)=> x.quantity).reduce((x,y)=>x+y,0)

  return (
    <div>
      <Link to='/cart'>
        <BsFillBagPlusFill size={26} />
      </Link>

      {saved.length === 0 ? null : (
        <span className='bg-green-300 rounded-full relative bottom-10 left-5 p-1 text-xs text-gray-800'>
         {itemQuantity}
        </span>
      )}
    </div>
  );
}

export default CartModal;
