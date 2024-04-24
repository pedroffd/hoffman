import Hero from './components/hero';
import HowItWorks from './components/how-it-works';
import AlreadyUser from './components/already-user';
import { HeroItemList } from '@/mockedData';

export default function Home() {
  return (
    <>
      <Hero heroProps={HeroItemList[0]} />
      <HowItWorks />
      <AlreadyUser />
    </>
  );
}
