import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillBagPlusFill, BsSearch } from "react-icons/bs";
import Shop from "../DropdownMenu/ShopMenu";
import { FaUser, FaTimes, FaBars } from "react-icons/fa";
import CartModal from "./Shared/CartList/CartModal";
import {motion, useScroll} from 'framer-motion'


// Motion Variants
const dropDownVariants = {
  hidden: {
    zIndex: -1,
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    ease: 'easeIn',
    transition: {
      duration:1 ,
      delay: 0.1
    }
  }
}

const menuVariants = {
  hidden: {
    x: "200vw",
    opacity: 0,
  },
  visible: {
    x: "92vw",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      ease: 'easeIn'
    }
  }

}

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      ease: 'easeIn',
      duration: 2,
      delay: 0.5,
    }
  

  }
}








const Navbar = ({
  search,
  setSearch,
  dropDown,
  setDropDown,
  node,
  setNode,
  saved
}) => {


  //navigation menu hover method
  const mouseOver = (e) => {
    setDropDown(true);
    setNode(e.target.innerHTML);
  };

  //setting the state of the displayMenu and displayIcon 
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displayIcon, setIconDisplay] = useState(false)

  
  const openNav = () => {
    setDisplayMenu(!displayMenu)
    setIconDisplay(!displayIcon)
  }

  const  closeNav = () => {
    setDisplayMenu(false);
    setIconDisplay(false);
  }





  return (
    <>
      <div className='fixed top-0 left-0 z-50 bg-slate-900 text-gray-300 w-full h-fit container-width p-8'>
        <nav className='navbar'>
          <div className='container mx-auto '>
            <div className='flex-none px-2 mx-2 relative bottom-1'>
              <Link to='/' className='text-lg'>
                brand Logo
              </Link>
            </div>

            <div className='flex items-center flex-1 fullMenu'>
              <div className='flex-1 px-2 mx-2 relative z-50 text-sm bottom-1'>
                <motion.div className='flex gap-x-10 text-center font-semibold ml-5'
                variants={navVariants}
                initial={'hidden'}
                animate={'visible'}
                >
                  <NavLink
                    onMouseOver={mouseOver}
                    to='/home'
                    className='nav-item '
                  >
                    New Releases
                  </NavLink>

                  <NavLink
                    onMouseOver={mouseOver}
                    to='/shop'
                    className='nav-item '
                  >
                    Shop
                  </NavLink>
                  <motion.div
                    variants={dropDownVariants}
                    animate='visible'
                    className='overflow-x-hidden w-screen absolute top-12 -left-36  z-0'
                    onMouseLeave={() => {
                      setDropDown(false);
                    }}
                  >
                    {node === "Shop" && dropDown ? (
                      <div>
                        <Shop />
                      </div>
                    ) : (
                      " "
                    )}
                  </motion.div>

                  <NavLink
                    onMouseOver={mouseOver}
                    to='/about'
                    className='nav-item'
                  >
                    About
                  </NavLink>
                  <div
                    className='overflow-y-hidden overflow-x-hidden w-screen absolute -left-36 top-12 z-0'
                    onMouseLeave={() => {
                      setDropDown(false);
                    }}
                  ></div>

                  <NavLink
                    onMouseOver={mouseOver}
                    to='/contact'
                    className='nav-item'
                  >
                    Contact
                  </NavLink>
                </motion.div>
              </div>

              <div className='flex'>
                <div className='flex flex-row gap-x-5 px-2 mx-2'>
                  <CartModal saved={saved} />

                  <BsSearch
                    size={26}
                    className='searchIcon'
                    onClick={() => {
                      setSearch(!search);
                    }}
                  />
                </div>
                <div className='search-dropdown'>
                  {search ? (
                    <input
                      type='text'
                      placeholder='Search'
                      className='input input-info input-md w-full max-w-xs'
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          {!displayIcon ? (
            <FaBars size={30} className='rMenu' onClick={openNav} />
          ) : (
            <FaTimes size={30} onClick={closeNav} />
          )}
        </nav>

        <div className='fixed top-15 left-0 z-0 text-center p-2 font-light text-xs w-full bg-black text-zinc-200'>
          <div className='border-red-800'>
            <p>Free Shipping from $100</p>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {displayMenu ? (
        <motion.div
          className='text-white fixed z-50 top-32 -left-60 h-full w-full bg-slate-900 mx-auto container'
          variants={menuVariants}
          initial='hidden'
          animate='visible'
        >
          <div className=''>
            <div className='flex flex-col gap-y-5 border-black'>
              <div className='bg-slate-800 p-6 rounded-lg mt-2'>
                <div className='text-slate-300'>
                  <NavLink
                    onMouseOver={mouseOver}
                    to='/home'
                    className='nav-item '
                  >
                    New Releases
                  </NavLink>
                </div>
              </div>

              <div className='bg-slate-800 p-6 rounded-lg'>
                <div className='text-slate-300'>
                  <NavLink
                    onMouseOver={mouseOver}
                    to='/shop'
                    className='nav-item '
                  >
                    Shop
                  </NavLink>
                </div>
              </div>

              <div className='bg-slate-800 p-6 rounded-lg'>
                <div className='text-slate-300'>
                  <NavLink
                    onMouseOver={mouseOver}
                    to='/about'
                    className='nav-item'
                  >
                    About
                  </NavLink>
                </div>
              </div>

              <div className='bg-slate-800 p-6 rounded-lg'>
                <div className='text-slate-300'>
                  <NavLink
                    onMouseOver={mouseOver}
                    to='/contact'
                    className='nav-item'
                  >
                    Contact
                  </NavLink>
                </div>
              </div>

              <div className='mt-6 p-4 rounded-lg'>
                <div className='flex flex-col gap-y-6 text-slate-300'>
                  <CartModal saved={saved} />

                  <BsSearch
                    size={26}
                    className='searchIcon'
                    onClick={() => {
                      setSearch(!search);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
