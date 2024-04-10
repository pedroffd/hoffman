import { homepageCards } from '../../mockedData';
import CardProductInfo from '@/components/ui/card-product-info';

const HowItWorks = () => {
  return (
    <section className="flex flex-col py-4 px-2 items-center justify-center text-center container">
      <p className="font-bold text-4xl text-text-primary my-6">How it works?</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {homepageCards.map((card, index) => (
          <CardProductInfo cardProps={card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
