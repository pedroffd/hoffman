'use client';
import Image from 'next/image';
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

const components: { title: string; href: string }[] = [
  {
    title: 'FAQ',
    href: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Terms',
    href: '/docs/primitives/hover-card',
  },
  {
    title: 'Contact',
    href: '/docs/primitives/progress',
  },
  {
    title: 'Partners',
    href: '/docs/primitives/scroll-area',
  },
  {
    title: 'Login',
    href: '/docs/primitives/tabs',
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

  return (
    <div
      className={`header z-20 sticky top-0 ${isBlackBackground ? 'bg-black' : 'bg-black lg:bg-transparent'}`}
    >
      <div
        className="container flex flex-col lg:flex-row py-3 max-w-5xl w-full 
    lg:justify-between font-mono text-sm lg:flex"
      >
        <div className="flex items-center justify-between w-full lg:ml-auto">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse md:ml-0"
            href="https://medroster.com/"
          >
            <Image
              src="/medrosterlogo.png"
              alt="Medroster"
              height={34}
              width={225}
            />
          </a>

          {/* Menu icon for smaller displays */}
          <div
            className="flex lg:hidden items-center border hover:cursor-pointer 
        text-foreground p-1 border-foreground rounded-md w-12 justify-center 
        "
          >
            {/*     {screenWidth} */}
            <Menu onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>

        {/* Navigation menu for smaller displays */}
        <div className="flex lg:hidden">
          {menuOpen && (
            <div className="bg-black w-full">
              <div className="flex flex-col">
                {components.map((component, index) => (
                  <a
                    href={component.href}
                    key={index}
                    className="text-white py-2 hover:text-primary text-lg"
                  >
                    {component.title}
                  </a>
                ))}
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
                className={`${isBlackBackground ? 'text-white' : 'text-accent'}`}
              >
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={component.href}
                >
                  {component.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
