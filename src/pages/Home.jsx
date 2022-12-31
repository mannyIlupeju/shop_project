import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Products from "../products/Products";
import { futureProofAudio } from "../products/Products";
import { Link, NavLink } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Button from "../components/Shared/Button";
import { FaSpotify, FaApple, FaAudible } from "react-icons/fa";
import { motion } from "framer-motion";


const imageVariants = {
  initial: {
    scale: 0,
  },
  visible: {
    scale: 1.1,
  },
};

const heroTextVariants = {
  hidden: {
    x: "-200",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      type: "spring",
      stiffness: 30,
    },
  },
};

const heroImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeIn',
      delay: '0.2',
      duration: 2
    }
  }
}

const heroImageVariants2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SectionTwo = ({ items, setItems }) => {
  return (
    <div className='sm:px-20 px-10 flex flex-col lg:mx-auto container text-gray-300 h-min mt-40'>
      <div className=''>
        <motion.h2
          className='text-left text-3xl lg:text-6xl 2xl:text-6xl font-bold'
          variants={heroTextVariants}
          initial={"hidden"}
          whileInView={"visible"}
        >
          <span className='textGradient bg-clip-text'>100 Selections </span>to
          choose from
        </motion.h2>
      </div>

      <div className='flex flex-col 2xl:flex-row lg:flex-row mt-5'>
        <div className='text-left leading-loose'>
          <motion.p
            className='w-80'
            variants={heroTextVariants}
            initial={"hidden"}
            whileInView={"visible"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </motion.p>
          <motion.div
            className='sectionTwoBtn mt-12'
            variants={heroTextVariants}
            initial={"hidden"}
            whileInView={"visible"}
          >
            <Link to='/shop'>
              <Button>Shop Now</Button>
            </Link>
          </motion.div>
        </div>

        <div className='carousel-wrapper mt-20 md:mt-0'>
          <div className='flex mx-10 '>
            <Carousel breakPoints={breakPoints}>
              {Products.map((items, index) => {
                return (
                  <div key={index} className=' justify-center rounded-lg item'>
                    <Link>
                      <motion.div
                        variants={imageVariants}
                        initial='hidden'
                        whileHover='visible'
                      >
                        <img
                          src={items.image}
                          alt={items.alt}
                          className='p-4 rounded-t-lg imagesBox'
                          loading='lazy'
                        />
                      </motion.div>
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
};

const SectionThree = () => {
  const [product, sethoverProduct] = useState([]);

  const productItem = (id) => {
    let newHoverItem = futureProofAudio.find(
      (futureProofAudio) => futureProofAudio.id === id
    );
    sethoverProduct(newHoverItem);
  };

  const button = (
    <Link to='/shop'>
      <button className='btn btn-success btn-md relative bottom-80 left-40 sm:btn-sm md:btn-md lg:btn-lg  2xl:bottom-80 2xl:left-50 md:bottom-80 md:left-30'>
        Quick Shop
      </button>
    </Link>
  );

  return (
    <div className='flex justify-center container-width mx-auto md:mt-40 text-gray-300'>
      <div className='headlineThree'>
        <motion.div
          className='headLineText font-bold md:p-12 p-20 2xl:p-2'
          variants={heroTextVariants}
          initial={"hidden"}
          whileInView={"visible"}
        >
          <h2 className='text-3xl xl:text-6xl lg:text-6xl 2xl:text-6xl'>
            Welcome to{" "}
            <span className='textGradient bg-clip-text'>Future-Proof</span>{" "}
            Audio
          </h2>
          <div className='headlineSubText mt-5 text-lg '>
            <p>
              Our new smart Feature Technology runs innovative features and adds
              upgrades via the "brandlogo" App.
            </p>
          </div>
          <div className='text-3xl mt-3'>The future is now</div>
        </motion.div>

        <div className='container mx-auto px-5 grid grid-cols-1 2xl:grid-cols-2 lg:grid-cols-2 w-max mt-10 gap-12'>
          {futureProofAudio.map((items) => {
            const { item, index, images, id, className } = items;
            return (
              <motion.div
                key={id}
                className='cursor-pointer imageBox'
                variants={imageVariants}
                whileHover='visible'
              >
                <img
                  src={images}
                  className={className}
                  onMouseEnter={() => productItem(id)}
                />
                {product.id === id ? button : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SectionFour = () => {
  return (
    <motion.div className=' container-width flex mx-auto justify-center p-10 2xl:p-0 mt-40 mb-40'
    variants={heroImageVariants2}
    initial="hidden"
    whileInView={"visible"}
    >
      <div className='flex flex-row justify-center p-10 items-center cta-banner rounded-md'>
        <div className='flex flex-col relative md:ml-16 text-gray-300'>
          <h1 className='2xl:text-6xl text-4xl sm:mt-10 font-extrabold'>
            Sounds for
            <span className='textGradient bg-clip-text'> Everyone</span>
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

        <div className='sm:mt-10 md:block hidden'>
          <img src='/images/skullcandy5.webp' />
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};

export default Home;
