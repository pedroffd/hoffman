import { Button } from '@/components/ui/button';

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
      <div className="h-56 md:h-80 inset-0 flex items-center justify-center bg-secondary">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          Terms of Service
        </h1>
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
