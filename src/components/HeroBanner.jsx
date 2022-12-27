import Button from "../components/Shared/Button";
import {Link} from 'react-router-dom'
const HeroBanner = () => {
  return (
    <div className='mx-auto bg-slate-800 text-gray-300 container-width h-fit w-full'>
      <div className='p-16 '>
        <div className='text-neutral-content justify-center flex flex-col 2xl:flex-row xl:flex-row lg:flex-row leading-loose mx-15 w-screen'>
          {/**Setting up the hero banner headline */}
          <div className=' md:relative md:left-12'>
            <div className='mt-40 md:leading-10'>
              <h1 className='text-5xl font-extrabold md:text-7xl '>
                Major III Bluetooth
              </h1>
              <p>A Modern Classic Re-engineered for $149</p>
            </div>

            <div className='py-6 max-w-md md:text-lg md:max-w-lg'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>

              <div className='mt-9 flex flex-row gap-x-8'>
                <Link to='/shop'>
                 <Button >Shop</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className='relative top-16 left-10 w-fit sm:top-14 md:top-16 md:right-20 lg:left-1 lg:top-52 xl:top-32 2xl:top-14'>
              <img
                src='/images/newherobanner.png'
                alt='girl listening to music'
                className='block'
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
