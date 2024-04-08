import Image from 'next/image';
import { Header } from './components/header-menu';
import Hero from './components/hero';
import CTA from './components/cta';
import HowItWorks from './components/how-it-works';
import AlreadyUser from './components/already-user';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen mx-auto">
      <Header />

      <div className="absolute inset-0 bottom-48 md:-bottom-10 lg:-top-8 lg:-bottom-4">
        <Image
          src="/images/jumbotron.jpg"
          alt="Medroster Landing"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          blurDataURL="data:/jumbotron.jpg"
        />
      </div>
      <div className="flex-grow relative">
        <div className="relative z-10 xl:container">
          <Hero />
        </div>
      </div>
      <div className="relative z-10 top-16 sm:top-36 md:top-96 lg:top-44">
        <CTA />
        <HowItWorks />
        <AlreadyUser />
      </div>
    </main>
  );
}

{
  /* /* bg-landing-page bg-cover bg-center  */
}
