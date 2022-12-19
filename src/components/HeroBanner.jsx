import Button from "../components/Shared/Button";

const HeroBanner = () => {
  return (
    <div className='hero h-screen 2xl:mb-2 lg:mb-10 md:mb-10'>
      <div className='p-16 hero-overlay flex 2xl:flex-row justify-center lg:flex-row md:flex-col sm:flex-col'>
        <div className='text-neutral-content justify-center 2xl:flex flex-row leading-loose mx-15 '>
          {/**Setting up the hero banner headline */}
          <div className=''>
            <div className='mt-40'>
              <h1 className='text-7xl font-bold text-teal-500 '>
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
             <div className='relative bottom-30 w-fit'>
              <img src='/images/heroUntitled.png' alt="girl listening to music" width={1500}/>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
