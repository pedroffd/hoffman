import Hero from '@/app/components/hero';
import HowItWorks from '@/app/components/how-it-works';
import AlreadyUser from '@/app/components/already-user';
import { HeroItemList } from '@/mockedData';

export default function Home() {
  return (
    <>
      <Hero heroProps={HeroItemList[1]} />
      <HowItWorks />
      <AlreadyUser />
    </>
  );
}
