import { Button } from '@/components/ui/button';
import Image from 'next/image';

export interface TermsItem {
  title: string;
  content: JSX.Element;
}

export interface TermsProps {
  terms: TermsItem[];
}

const Terms: React.FC<TermsProps> = ({ terms }) => {
  return (
    <div className="w-full bg-muted relative mx-auto">
      <div className="relative mx-auto">
        <Image
          src="/images/tinted-jumbotron-3.jpg"
          alt="Terms of Use"
          placeholder="blur"
          loading="lazy"
          height={304}
          width={1170}
          layout="responsive" // Adiciona essa propriedade
          blurDataURL="data:/images/tinted-jumbotron-3.jpg"
          className="w-full" // Adiciona essa classe
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="text-justify text-text-title justify-center items-center max-w-4xl mx-auto container mt-8">
        {terms.map((term, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold my-3">{term.title}</h2>
            <>{term.content}</>
          </div>
        ))}

        <div className="flex flex-row items-center space-x-4 justify-center mt-24 mb-6">
          <p className="text-2xl font-light">How can we help you?</p>{' '}
          <Button className="text-white w-44 my-3" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
