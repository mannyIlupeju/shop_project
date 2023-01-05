import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import { motion } from "framer-motion";







function Shop() {
  return (
    <div 
    className='container dropdown-menu h-min p-10 relative -top-5 z-50 overflow-x-hidden text-zinc-800'
    >
      <div className='grid grid-cols-5 text-xs p-8 text-left'>
        <div className='border-r-4 ml-5'>
          <ul>
            <li>Gift Guide</li>
            <li>Products</li>
            <li>Corporate Sales</li>
            <li>Sale</li>
          </ul>
        </div>
        <div>
          <div className='ml-5'>
            <div>Earbuds</div>
            <Link to='/earbuds' className='hoverItem'>
              <h3 className='font-bold'>Shop all Earbuds</h3>
            </Link>
          </div>
        </div>

        <div>
          <div className=''>
            <div>Headphones</div>
            <Link to='/headphones' className='hoverItem'>
              <h3 className='font-bold'>Shop all Headphones</h3>
            </Link>
          </div>
        </div>

        <div>
          <div className=''>
            <div>Merch</div>
            <Link to='' className='hoverItem'>
              <h3 className='font-bold'>Shop all Clothing</h3>
            </Link>
          </div>
        </div>

        <div>
          <div className=''>
            <div>Gaming</div>
            <Link to='' className='hoverItem'>
              <h3 className='font-bold'>Shop all Gaming</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop
