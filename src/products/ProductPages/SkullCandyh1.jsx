import React, {useState} from 'react'
import { shopItemList } from '../Products';

import ProductOptionList from '../../components/Shared/CartList/ProductOptionList';
import {FaPlus, FaMinus} from 'react-icons/fa'




function SkullCandyh1({
  addItemCart,
  saved,
  updateAmount,
  reduceAmount,
  setValue,
  value,
}) {
  const [itemList, setItemList] = useState(false);
  const [noDrop, setDrop] = useState(true);
 

  //array function to retrieve the item from the list of arrays
  let skullCandy = shopItemList.find((item) => item.name === "SkullCandy1");
  //Destructuring the object
  const { productTitle, productDesc, price, productOptions, thumbnail, id } =
    skullCandy;

  //To retrieve an array of objects containing the item Options available
  let products = productOptions.map((item, id) => {
    return (
      <div key={item.id}>
        <ProductOptionList>
          <div className='flex justify-center'>
            <img src={item.altImage} width={40} />
          </div>
          <div className='my-2'>
            <h3 className='text-black text-sm'>{item.optionName}</h3>
          </div>
        </ProductOptionList>
      </div>
    );
  });

  const toggleDrop = () => {
    setDrop(!noDrop);
    setItemList(!itemList);
  };

 

  return (
    <>
      <div className='flex flex-row gap-x-20 h-full h1Banner relative z-0 overflow-x-hidden'>
        <div className='leading-loose w-full text-white my-72 ml-20 flex flex-col gap-y-1'>
          <div className='mb-5'>
            <h1 className='text-5xl font-extrabold w-20'>{productTitle}</h1>
          </div>
          <div>
            <h2 className='text-xl font-bold w-60'>{productDesc}</h2>
          </div>
          <p className='text-lg font-extrabold'>{price}</p>

          <ProductOptionList>
            <div className='justify-center'>
              <img src={thumbnail} width={40} />
            </div>
            <div className='my-2 gap-x-5'>
              <h3 className='text-black text-sm'>{productTitle}</h3>
            </div>

            <div
              className='my-2 cursor-pointer relative left-32'
              onClick={toggleDrop}
            >
              {noDrop ? (
                <div>
                  <FaMinus size={25} color={"black"} />
                </div>
              ) : null}

              {!noDrop ? (
                <div>
                  <FaPlus size={25} color={"black"} />
                </div>
              ) : null}
            </div>
          </ProductOptionList>

          {itemList ? products : null}

          {/* Add to Cart Functionality */}
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
              onClick={() => {
                let newItem = {
                  id: id,
                  quantity: value,
                  thumbnail: thumbnail,
                  price: price,
                  productTitle: productTitle,
                };

                //to confirm if item is already in cart
                let search = saved.find((x) => x.id === newItem.id);
              

                if (search === undefined) {
                  addItemCart(newItem);
                  console.log('added')
                } 
                else if(search) {
                  setValue((prevCount) => prevCount + 1);
 
                }
              }}
            >
              ADD TO CART
            </button>
          </div>

          <div>
            <p>
              Enter your email address to be notified when this item is in stock
            </p>
            <input
              type='email'
              className='input input-info input-md w-full max-w-xs'
              placeholder='Enter email'
            />
            <div className='mt-5'>
              <button className='button-6'>Notify Me</button>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen secondImageProductPage bg-black text-white leading-loose'>
        <div className='ml-20 pt-60'>
          <h1 className='text-4xl font-extrabold mb-4'>All love, all year</h1>
          <p className='w-1/3'>
            The LGBTQIA+ community faces higher-than-average rates of
            depression, PTSD and anxiety disorder. We are teaming up with our
            friends at To Write Love on Her Arms to help raise awareness and
            spread some love - not just for Pride Month, but all year long.
          </p>
        </div>
      </div>
    </>
  );
}

export default SkullCandyh1
