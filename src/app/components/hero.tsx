import { Button } from '@/components/ui/button';
const Hero = () => {
  return (
    <div className="z-10 flex flex-col mt-20 pt-2 container max-w-5xl">
      <h1 className="text-2xl lg:text-4xl font-bold text-secondary sm:mr-32 sm:pr-50 md:mr-10 md:w-4/6 lg:w-7/12 leading-8 mb-6 pr-48 lg:mr-12 ">
        Communicate Safely with Medroster
      </h1>

      <div className="text-text-muted font-light text-base w-7/12 sm:w-3/6 md:w-3/6 lg:w-2/6">
        <p className="mb-6 mr-2">
          Message colleagues and patients in real-time.{' '}
        </p>
        <p className="mb-6 l">
          Medroster has everything you need to get your office up and running in
          no time!
        </p>
        <p className="mb-6 ">
          Medroster enables medical offices and pharma to communicate
          efficiently with each other
        </p>
      </div>

      <Button className="text-secondary w-44" size="lg">
        SIGN ME UP
      </Button>
    </div>
  );
};

export default Hero;
