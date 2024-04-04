import { Button } from '@/components/ui/button';
const Hero = () => {
  return (
    <div
      className="z-10 flex flex-col mt-20 pt-2 xl:pr-52 
    h-2/3 w-7/12 ml-6 
    
     sm:container sm:ml-6 sm:w-7/12 sm:pr-16 sm:mr-2
     md:pr-16 md:ml-0
     lg:pl-16 lg:pr-42 lg:ml-8 lg:mt-36 
    "
    >
      <h1 className="text-2xl lg:text-4xl font-bold text-secondary leading-8 mr-16 md:mr-28 mb-6 lg:mb-8">
        Communicate Safely with Medroster
      </h1>

      <div className="text-text-muted font-light text-base mb-8 pr-18 sm:mr-8 md:mr-16 lg:mr-36">
        <p className="mb-6 mr-2 lg:mb-8">
          Message colleagues and patients in real-time.{' '}
        </p>
        <p className="mb-6 lg:mb-8">
          Medroster has everything you need to get your office up and running in
          no time!
        </p>
        <p className="mb-6 lg:mb-8">
          Medroster enables medical offices and pharma to communicate
          efficiently with each other
        </p>
      </div>

      <Button className="text-secondary w-6/12" size="lg">
        SIGN ME UP
      </Button>
    </div>
  );
};

export default Hero;
