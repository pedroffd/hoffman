import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Header } from './components/header-menu';
import Footer from './components/footer';
import { Toaster } from '@/components/ui/toaster';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Medroster',
  description: 'HIPAA Compliant Chat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body suppressHydrationWarning={true}>
        <main className="flex flex-col min-h-screen min-w-screen mx-auto bg-secondary">
          <Header /> {children} <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
