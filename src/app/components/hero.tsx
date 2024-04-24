import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center z-10 max-w-7xl container lg:mx-auto mt-20 relative">
      {/* Coluna da imagem */}
      <div className="lg:w-1/2 relative">
        <div className="relative inset-0 z-10">
          <Image
            src="/images/landing_computer.png"
            alt="Medroster Landing"
            placeholder="blur"
            width={615}
            height={615}
            loading="lazy"
            blurDataURL="data:/images/landing_computer.png"
          />
        </div>
        <div className="absolute bottom-0 right-10 z-20">
          <Image
            src="/images/IphoneMockupMed1.png"
            alt="Medroster Iphone"
            placeholder="blur"
            width={110}
            height={227}
            loading="lazy"
            blurDataURL="data:/images/IphoneMockupMed1.png"
          />
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col justify-start lg:mx-auto lg:ml-4 align-middle my-4 lg:my-0 xl:mb-32">
        <h1 className="text-6xl lg:text-5xl font-bold text-center lg:text-left lg:mb-3">
          <span className="text-primary">Medroster</span>
          <span className="text-white"> for offices</span>
        </h1>

        <div className="text-white font-light text-xl justify-start text-justify lg:mb-3 max-w-xl">
          <p className="my-6 leading-7">
            Message colleagues and patients in real-time. Medroster has
            everything you need to get your office up and running in no time!
            Medroster enables medical offices and pharma to communicate
            efficiently with each other.
          </p>
        </div>

        <div className="md:w-3/4 flex space-x-6 mx-auto md:mx-0">
          <Button
            className="text-white w-44 bg-transparent border border-primary h-12"
            size="lg"
            variant="outline"
          >
            How does it work?
          </Button>
          <Button className="text-white w-44 h-12" size="lg">
            Sign me up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
