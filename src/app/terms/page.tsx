import { Button } from '@/components/ui/button';
import Image from 'next/image';

const TermsOfUse = () => {
  return (
    <div className=" max-w-6xl bg-muted relative mx-auto">
      <div className="relative">
        <Image
          src="/images/tinted-jumbotron-3.jpg"
          alt="Terms of Use"
          placeholder="blur"
          loading="lazy"
          height={304}
          width={1170}
          blurDataURL="data:/images/tinted-jumbotron-3.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        </div>
      </div>

      <div className="text-justify text-text-title justify-center items-center max-w-4xl mx-auto container mt-8">
        <h2 className="text-3xl font-semibold my-3">Terms of Agreement</h2>
        <p className="font-light">
          (Last Reviewed on January 01, 2016) Welcome to the Medroster website,
          (the “Site”). The Site is a copyrighted work belonging to Medroster,
          Inc., a Delaware corporation (“Medroster”). Medroster grants you the
          right to use the Site and the features, content or applications
          offered in connection with the Site subject to the terms and
          conditions (“Terms”) set forth below.
        </p>

        <div className="flex flex-row items-center space-x-4 justify-center mt-24 mb-6">
          <p>How can we help you?</p>{' '}
          <Button className="text-white w-44 my-3" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
