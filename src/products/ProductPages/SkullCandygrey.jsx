import React, {useState, useEffect} from 'react'
import { shopItemList } from '../Products'
import ProductOptionList from "../../components/Shared/CartList/ProductOptionList";
import { FaPlus, FaMinus } from "react-icons/fa";





function SkullCandygrey({addItemCart, saved, updateAmount, value, reduceAmount, setValue}) {
  //to generate dropdown menu when + is clicked
  const [itemList, setItemList] = useState(false);
  const [noDrop, setDrop] = useState(true);
  


  const greySkully = shopItemList.find((item) => item.name === "SkullCandy2");
  const {
    productTitle,
    productDesc,
    price,
    thumbnail,
    productOptions,
    productName,
    id,
  } = greySkully;



  //To retrieve an array of objects containing the item Options available
  let products = productOptions.map((item) => {
    const { id, altImage, optionName } = item;

    return (
      <div key={id}>
        <ProductOptionList>
          <div className='flex justify-center'>
            <img src={altImage} width={40} />
          </div>
          <div className='my-2'>
            <h3 className='text-black text-sm'>{optionName}</h3>
          </div>
        </ProductOptionList>
      </div>
    );
  });

  //program the dropdown option list
  const toggleDrop = () => {
    setDrop(!noDrop);
    setItemList(!itemList);
  };



  return (
    <div>
      <>
        <div className=' gap-x-20 h-fit greyBanner overflow-x-hidden'>
          <div className='leading-loose w-full text-white my-72 ml-20 flex flex-col gap-y-1'>
            <div className='mb-5'>
              <div>
                <h1 className='text-5xl font-extrabold w-80'>{productTitle}</h1>
              </div>
              <div>
                <h2 className='text-xl font-bold w-60'>{productDesc}</h2>
              </div>
              <p className='text-xl font-extrabold'>{price}</p>
            </div>

            <ProductOptionList>
              <div className='flex flex-row gap-x-1' key={id}>
                <div className=''>
                  <img src={thumbnail} width={40} />
                </div>

                <div className='my-2'>
                  <h3 className='text-black text-sm'>{productName}</h3>
                </div>

                <div
                  className='my-2 cursor-pointer relative left-52'
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
                   const newItems = {
                     id: id,
                     quantity: value,
                     thumbnail: thumbnail,
                     price: price,
                     productTitle: productTitle,
                   };
                   let search = saved.find((y)=>y.id === newItems.id)
                   
                   if(search === undefined) {
                     addItemCart(newItems);
                   }
                   else {
                    newItems.quantity += Number(newItems.quantity);
                    console.log(newItems.quantity)
                    
                   }

                }}
              >
                ADD TO CART
              </button>
            </div>

            <div>
              <p>
                Enter your email address to be notified when this item is in
                stock
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

        <div className='h-screen greyBanner2 text-white'>
          <div className='ml-20 pt-60'>
            <h1 className='text-4xl font-extrabold'>All love, all year</h1>
            <p className='w-1/3'>
              The LGBTQIA+ community faces higher-than-average rates of
              depression, PTSD and anxiety disorder. We are teaming up with our
              friends at To Write Love on Her Arms to help raise awareness and
              spread some love - not just for Pride Month, but all year long.
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

export default SkullCandygrey
