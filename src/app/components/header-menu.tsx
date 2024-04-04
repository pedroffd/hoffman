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

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

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
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    // Initial size on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="z-10 flex sticky top-0 py-3 max-w-6xl w-full items-center justify-between 
      font-mono text-sm lg:flex sm:container bg-black md:bg-green-500 lg:bg-blue-500
      
    "
      /*sm:bg-red-500 md:bg-blue-400 lg:bg-yellow-500 xl:bg-green-400  */
    >
      <a
        className="flex items-center space-x-3 rtl:space-x-reverse ml-6 md:ml-0"
        href="https://https://medroster.com/"
      >
        <Image
          src="/medrosterlogo.png"
          alt="Medroster"
          height={34}
          width={225}
        />
      </a>

      {/* Navigation menu for smaller displays */}

      <Menubar className="flex lg:hidden mr-6 md:mr-0">
        {' '}
        <span className="text-white text-xs lg:hidden">{screenWidth}px</span>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>FAQ</MenubarItem>
            <MenubarItem>Terms</MenubarItem>
            <MenubarItem>Contact</MenubarItem>
            <MenubarItem>Partners</MenubarItem>
            <MenubarItem>Login</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Navigation menu for wider displays */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            {' '}
            <span className="text-white text-xs ">{screenWidth}px</span>
            {components.map((component, index) => (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href={component.href}
                key={index}
              >
                {component.title}
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
