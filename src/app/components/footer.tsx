import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
    href: '/docs/primitives/alert-dialog',
  },

  {
    title: 'FAQ',
    href: '/docs/primitives/alert-dialog',
  },
];

const Footer = () => {
  return (
    <div className="container text-white max-w-7xl">
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
          <Button className="text-white w-44 my-3" size="lg">
            Sign me up
          </Button>
        </div>

        <div className="flex flex-col text-end">
          <h4 className="text-xl font-bold my-2">Sitemap</h4>
          <div className="flex flex-col font-light">
            {sitemap.map((item, index) => (
              <a href={item.href} key={index} className="my-1">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between align-middle text-sm font-light">
        <p className="text-start">
          Copyright Ⓒ 2024 Medroster Inc. All Rights Reserved.
        </p>
        <div className="text-end">
          <a href="https://medroster.com/" className="mx-2">
            Terms & Conditions
          </a>
          <a href="https://medroster.com/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
