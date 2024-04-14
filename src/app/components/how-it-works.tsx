import { homepageCards } from '../../mockedData';
import CardProductInfo from '@/components/ui/card-product-info';

const HowItWorks = () => {
  return (
    <section className="flex flex-col py-4 px-2 items-center justify-center text-center container">
      <div className="border-b-[0.4px] border-muted-foreground my-8">
        <h3 className="font-bold text-5xl text-white my-6 ">
          How does it <span className="text-primary">work</span> ?
        </h3>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {homepageCards.map((card, index) => (
          <CardProductInfo cardProps={card} key={index} index={index} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
