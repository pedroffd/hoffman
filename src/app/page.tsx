import Image from 'next/image';
import { Header } from './components/header-menu';
import Hero from './components/hero';
import CTA from './components/cta';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen mx-auto">
      <Header />
      <div className="flex-grow relative">
        <div className="absolute inset-0 bottom-12 -top-12 md:-bottom-10">
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

        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <div className="relative -top-12 md:top-5">
        <CTA />
      </div>
    </main>
  );
}

{
  /* /* bg-landing-page bg-cover bg-center  */
}
