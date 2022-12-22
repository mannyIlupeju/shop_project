import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillBagPlusFill, BsSearch } from "react-icons/bs";
import Shop from "../DropdownMenu/ShopMenu";
import { FaUser } from "react-icons/fa";
import CartModal from "./Shared/CartList/CartModal";

const Navbar = ({
  search,
  setSearch,
  dropDown,
  setDropDown,
  node,
  setNode,
  saved
}) => {
  const mouseOver = (e) => {
    setDropDown(true);
    setNode(e.target.innerHTML);
  };

  return (
    <>
      <div className='fixed top-0 left-0 z-50 bg-slate-900 text-gray-300 w-full container-width p-8'>
        <nav className='navbar'>
          <div className='container mx-auto'>
            <div className='flex-none px-2 mx-2 relative bottom-1'>
              <Link to='/' className='text-lg'>
                brand Logo
              </Link>
            </div>

            <div className='flex-1 px-2 mx-2 relative z-50 text-sm bottom-1'>
              <div className='flex gap-x-10 text-center font-semibold ml-5'>
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
                <div
                  className='overflow-x-hidden w-screen absolute -left-36 top-12 z-0'
                  onMouseLeave={() => {
                    setDropDown(false);
                  }}
                >
                  {node === "Shop" && dropDown ? <Shop /> : ""}
                </div>

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
              </div>
            </div>

            <div className='flex'>
              <div className='flex flex-row gap-x-5 px-2 mx-2'>
                <Link to='/'>
                  <FaUser size={26} />
                </Link>

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
        </nav>

        <div className='fixed top-15 left-0 z-0 text-center p-2 font-light text-xs w-full bg-black text-zinc-200'>
          <div className='border-red-800'>
            <p>Free Shipping from $100</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
