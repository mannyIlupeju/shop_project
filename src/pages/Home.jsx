import React, {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import Products from '../products/Products'
import { futureProofAudio } from '../products/Products'
import { Link, NavLink } from 'react-router-dom'
import Carousel from "react-elastic-carousel";
import Button from '../components/Shared/Button'
import { FaSpotify, FaApple, FaAudible } from "react-icons/fa";





const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


const SectionTwo = ({items, setItems}) => {

   
  return (
    <div className='mx-auto sm:px-20 p-10 lg:mx-auto container text-gray-300 overflow-x-hidden h-min mt-40 md:pl-1'>
      <div className=''>
        <h2 className='text-left text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
          100 Selections to choose from
        </h2>
      </div>

      <div className='flex flex-col 2xl:flex-row lg:flex-row mt-5'>
        <div className='text-left leading-loose'>
          <p className='w-80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className='sectionTwoBtn mt-12'>
            <Button>Shop Now</Button>
          </div>
        </div>

        <div className='carousel-wrapper'>
          <div className='flex mx-10 '>
            <Carousel breakPoints={breakPoints}>
              {Products.map((items, index) => {
                return (
                  <div key={index} className=' justify-center rounded-lg  item'>
                    <Link>
                      <img
                        src={items.image}
                        alt={items.alt}
                        className='p-4 rounded-t-lg'
                        loading='lazy'
                      />
                      <div className='text-gray-300 mx-3'>
                        <div className='flex flex-row justify-between'>
                          <div className=''>{items.name}</div>
                          <div className='justify-end '>${items.price}</div>
                        </div>
                        <div className=''>{items.tags}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}


const SectionThree = () => {
 const [product, sethoverProduct] = useState([])
 

 const productItem = (id) => {
  let newHoverItem = futureProofAudio.find((futureProofAudio)=>futureProofAudio.id === id)
   sethoverProduct (newHoverItem)
 }



  const button = (
    <Link to ='/shop'>
    <button className='btn btn-success btn-md relative bottom-80 left-40 sm:btn-sm md:btn-md lg:btn-lg  2xl:bottom-80 2xl:left-60 md:bottom-80 md:left-30'>
      Quick Shop
    </button>
    </Link>
  );

 return (
   <div className='flex justify-center container-width mx-auto mt-40 text-gray-300'>
     <div className='headlineThree'>
       <div className='headLineText font-bold p-10 2xl:p-0'>
         <h2 className='text-3xl xl:text-6xl lg:text-6xl 2xl:text-6xl'>Welcome to Future-Proof Audio</h2>
         <div className='headlineSubText text-lg '>
           <p>
             Our new smart Feature Technology runs innovative features and adds
             upgrades via the "brandlogo" App.
           </p>
         </div>
         <div className='text-3xl mt-10'>The future is now</div>
       </div>

       <div className='container mx-auto px-5 grid grid-cols-1 2xl:grid-cols-2 lg:grid-cols-2 w-max mt-10 gap-12'>
         {futureProofAudio.map((items) => {
           const { item, index, images, id, className } = items;
           return (
             <div key={id} className='cursor-pointer imageBox'>
               <img
                 src={images}
                 className={className}
                 onMouseEnter={() => productItem(id)}
               />
               {product.id === id ? button : null}
             </div>
           );
         })}
       </div>
     </div>
   </div>
 );
}

const SectionFour = () => {

  return (
    <div className=' container-width flex mx-auto justify-center p-10 2xl:p-0 mt-40 mb-40'>
      <div className='flex flex-row justify-center p-10 items-center cta-banner rounded-md'>
        <div className='flex flex-col relative  ml-16 text-gray-300'>
          <h1 className='2xl:text-6xl text-4xl sm:mt-10 font-extrabold'>
            Sounds for Everyone
          </h1>
          <div className='mt-8 text-lg md:text-sm font-semibold '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>
              High quality noise reduction sophisticated aesthetics nice
              material
            </p>
          </div>
          <div className='mt-20 sm:mt-8 sm:mb-10'>
            <div>
              <h2>Listen to our holiday special on</h2>
            </div>

            <div className='flex flex-row gap-x-5 mt-2'>
              <div>
                <FaSpotify size={30} />
              </div>
              <div>
                <FaApple size={30} />
              </div>
              <div>
                <FaAudible size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className='sm:mt-10'>
          <img src='/images/skullcandy5.webp' />
        </div>
      </div>
    </div>
  );
}

const Home = () => {

  return (
      <>
        <HeroBanner/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
      </>
  
  )
}

export default Home

