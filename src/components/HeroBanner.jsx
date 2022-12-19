import Button from "../components/Shared/Button";

const HeroBanner = () => {
  return (
    <div className='hero h-min 2xl:mb-2 lg:mb-10 md:mb-10 2xl:overflow-hidden md:overflow-x-hidden'>
      <div className='p-16 hero-overlay flex 2xl:flex-row justify-center lg:flex-row md:flex-col sm:flex-col'>
        <div className='text-neutral-content justify-center 2xl:flex flex-row leading-loose mx-15 w-screen'>
          {/**Setting up the hero banner headline */}
          <div className='relative left-40 md:left-28'>
            <div className='2xl:mt-40 md:mt-20'>
              <h1 className='text-6xl font-extrabold text-teal-500 '>
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

              <div className='mt-14 flex flex-row gap-x-8'>
                <Button>Shop</Button>
              </div>
            </div>

          </div>

          <div className="flex">
             <div className='relative bottom-40 w-fit md:bottom-2'>
              <img src='/images/heroUntitled.png' alt="girl listening to music" className="block" width={1000}/>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
