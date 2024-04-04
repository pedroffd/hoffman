import { Button } from '@/components/ui/button';
const Hero = () => {
  return (
    <div
      className="z-10 flex flex-col mt-20 pt-2 md:pr-24 lg:pr-42 xl:pr-52 
    h-2/3 w-7/12 ml-6 md:ml-8"
    >
      <h1 className="text-2xl font-bold text-secondary leading-8 mr-16 mb-6">
        Communicate Safely with Medroster
      </h1>
      <div
        className="text-text-muted font-light
      text-base mb-8 pr-18 mr-5 md:w-8/12"
      >
        <p className="mb-6 mr-2">
          Message colleagues and patients in real-time.{' '}
        </p>
        <p className="mb-6">
          Medroster has everything you need to get your office up and running in
          no time!
        </p>
        <p className="mb-6">
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
