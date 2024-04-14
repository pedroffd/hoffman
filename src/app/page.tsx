import { Header } from './components/header-menu';
import Hero from './components/hero';
import HowItWorks from './components/how-it-works';
import AlreadyUser from './components/already-user';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen mx-auto bg-secondary">
      <Header />
      <Hero />
      <HowItWorks />
      <AlreadyUser />
      <Footer />
    </main>
  );
}
