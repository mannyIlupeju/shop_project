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
    <div className='mx-auto container overflow-x-hidden h-min '>
      <div className='p-10 2xl:mt-1 2xl:mx-6 lg:mt-10 md:mt-10'>
        <h2 className='text-left md:mt-9 text-7xl font-bold'>
          100 Selections to choose from
        </h2>
      </div>

      <div className=' p-auto flex flex-col gap-y-10 2xl:flex-row lg:flex-row'>
        <div className='ml-16 text-left leading-loose '>
          <p className='w-80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className='sectionTwoBtn mt-20'>
            <Button>Shop Now</Button>
          </div>
        </div>

        <div className='carousel-wrapper'>
          <div className='flex mx-10'>
            <Carousel breakPoints={breakPoints}>
              {Products.map((items, index) => {
                return (
                  <div
                    key={index}
                    className='p-2 justify-center rounded-lg  item'
                  >
                    <Link>
                      <img
                        src={items.image}
                        alt={items.alt}
                        className='p-3 rounded-t-lg'
                        loading='lazy'
                      />
                      <div className='text-amber-100 mx-3'>
                        <div className='flex flex-row justify-between'>
                          <div>{items.name}</div>
                          <div className='justify-end'>{items.price}</div>
                        </div>
                        <div>{items.tags}</div>
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
    <button className='btn btn-success btn-md relative bottom-80 left-40 sm:btn-sm md:btn-md lg:btn-lg  2xl:bottom-80 2xl:left-60 md:bottom-80 md:left-60'>
      Quick Shop
    </button>
    </Link>
  );

 return (
   <div className='m-auto h-fit container'>
     <div className='headlineThree m-24 2xl:mt-10'>
       <div className='headLineText font-bold pr-8 pt-12 -ml-1'>
         <h2 className='text-7xl'>Welcome to Future-Proof Audio</h2>
         <div className='headlineSubText text-xl '>
           <p>
             Our new smart Feature Technology runs innovative features and adds
             upgrades via the "brandlogo" App.
           </p>
         </div>
         <div className='my-8 text-3xl'>The future is now</div>
       </div>

       <div className='grid grid-cols-1 2xl:grid-cols-2 lg:grid-cols-2 gap-10 mt-20'>
            {futureProofAudio.map((items) =>{
                const {item, index, images, id, className} = items
                return (
                  <div key={id} className='cursor-pointer'>
                    <img src={images} 
                    className={className}
                    onMouseEnter={()=> productItem(id)}
                    />
                    {product.id === id ? button : null}
                  </div>
                )
            })}
       </div>

     </div>
   </div>
 );
}

const SectionFour = () => {

  return (
    <div className='w-fit m-auto container mt-40'>
      <div className='flex flex-row justify-center cta-banner rounded-md'>
        <div className='flex flex-col relative top-28 ml-16 text-zinc-700'>
          <h1 className='text-6xl font-extrabold'>Sounds for Everyone</h1>
          <div className='mt-8 text-lg font-semibold '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>
              High quality noise reduction sophisticated aesthetics nice
              material
            </p>
          </div>
          <div className='mt-20'>
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
        <div>
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

