'use client';
//import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { LoginForm } from '@/app/components/login-form';
//import { APP_NAME } from '@/utils/config';

const components: { title: string; href: string }[] = [
  {
    title: 'FAQ',
    href: '/faq',
  },
  {
    title: 'Terms',
    href: '/terms',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Partners',
    href: '/partners',
  },
];

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
    }

    // Initial position on mount
    handleScroll();

    // Event listener for window resize
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isBlackBackground = scrollPosition > 50;
  // Manipulador de evento para abrir o Dialog

  return (
    <>
      <header
        className={`header z-20 sticky top-0  ${isBlackBackground ? 'bg-black' : 'bg-black lg:bg-transparent'}`}
      >
        <div className="container flex flex-col lg:flex-row py-3 max-w-6xl w-full lg:justify-between font-mono text-sm lg:flex border-b-[0.4px] border-muted-foreground">
          <div className="flex items-center justify-between w-full lg:ml-auto">
            <Link
              className="flex items-center space-x-3 rtl:space-x-reverse md:ml-0"
              href="/"
            >
              <div className="bg-primary w-32 h-10 items-center align-middle text-center flex">
                <span className=" mx-auto text-2xl text-white">Logo</span>
              </div>
              {/*  <Image
                src="/hoffman.png"
                alt={APP_NAME}
                height={34}
                width={225}
                priority={false}
              /> */}
            </Link>

            {/* Menu icon for smaller displays */}
            <div className="flex lg:hidden items-center border hover:cursor-pointer text-foreground p-1 border-foreground rounded-md w-12 justify-center">
              <Menu onClick={() => setMenuOpen(!menuOpen)} />
            </div>
          </div>

          {/* Navigation menu for smaller displays */}
          <div className="flex lg:hidden">
            {menuOpen && (
              <div className="bg-black w-full">
                <div className="flex flex-col">
                  {components.map((component, index) => (
                    <Link
                      href={component.href}
                      key={index}
                      className="text-white py-2 hover:text-primary text-lg"
                    >
                      {component.title}
                    </Link>
                  ))}
                  <LoginForm />
                </div>
              </div>
            )}
          </div>

          {/* Navigation menu for wider displays */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {components.map((component, index) => (
                <NavigationMenuItem
                  key={index}
                  className="text-white hover:text-primary"
                >
                  <Link href={component.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {component.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <LoginForm />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}
