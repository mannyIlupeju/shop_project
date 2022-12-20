import Button from "../components/Shared/Button";

const HeroBanner = () => {
  return (
    <div className='mx-auto hero-color container-width h-fit 2xl:overflow-x-hidden md:overflow-x-hidden'>
      <div className='p-16 flex 2xl:flex-row lg:flex-row md:flex-col sm:flex-col'>
        <div className='text-neutral-content justify-center 2xl:flex flex-row leading-loose mx-15 w-screen'>
          {/**Setting up the hero banner headline */}
          <div className='relative left-40 md:left-28'>
            <div className='2xl:mt-40 md:mt-20'>
              <h1 className='text-5xl font-extrabold '>
                Major III Bluetooth
              </h1>
              <p>A Modern Classic Re-engineered for $149</p>
            </div>

            <div className='py-6 max-w-md'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>

              <div className='mt-9 flex flex-row gap-x-8'>
                <Button>Shop</Button>
              </div>
            </div>

          </div>

          <div className="flex">
             <div className='relative top-16 w-fit md:bottom-2'>
              <img src='/images/newherobanner.png' alt="girl listening to music" className="block" width={1000}/>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
