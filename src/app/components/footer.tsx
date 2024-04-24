import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignUpDialog } from '@/app/components/sign-up-dialog';

const sitemap: { title: string; href: string }[] = [
  {
    title: 'Login',
    href: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Signup',
    href: '/docs/primitives/alert-dialog',
  },

  {
    title: 'About',
    href: '/',
  },

  {
    title: 'FAQ',
    href: '/faq',
  },
];

const Footer = () => {
  return (
    <footer className="container text-white max-w-6xl bg-secondary">
      <div className="space-x-8 flex flex-row my-16 items-center align-middle justify-between">
        <div className="flex flex-col text-xl font-light">
          <Image
            src="/images/whitelogo.png"
            alt="Medroster"
            height={59}
            width={295}
            className="my-3"
          />
          <p className="my-3">
            Everywhere, Anywhere. Now compatible on all major platforms
            including iOS and Android.
          </p>
          <p className="my-3">
            One of a kind. A real-time HIPAA compliant messaging platform for
            staff and patients.
          </p>
          <SignUpDialog />
        </div>

        <div className="flex flex-col text-end">
          <h4 className="text-xl font-bold my-2">Sitemap</h4>
          <div className="flex flex-col font-light">
            {sitemap.map((item, index) => (
              <Link href={item.href} key={index} className="my-1">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between align-middle text-sm font-light">
        <p className="text-start">
          Copyright Ⓒ 2024 Medroster Inc. All Rights Reserved.
        </p>
        <div className="text-end">
          <Link href="/terms" className="mx-2">
            Terms & Conditions
          </Link>
          <Link href="/terms">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
