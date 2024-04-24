'use client';
import Image from 'next/image';
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
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

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
              href="https://medroster.com/"
            >
              <Image
                src="/medrosterlogo.png"
                alt="Medroster"
                height={34}
                width={225}
                priority={false}
              />
            </Link>

            {/* Menu icon for smaller displays */}
            <div
              className="flex lg:hidden items-center border hover:cursor-pointer 
        text-foreground p-1 border-foreground rounded-md w-12 justify-center 
        "
            >
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
                  <Link
                    href={'https://medroster.com/users/password/new'}
                    className="text-white py-2 hover:text-primary text-lg"
                  >
                    Login
                  </Link>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="text-white w-24" size="sm">
                      Login
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-96 sm:w-full sm:max-w-[425px] ">
                    <DialogHeader>
                      <DialogTitle className="text-primary text-2xl my-4 font-normal">
                        Login to Medroster
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-4">
                      <div className=" items-center gap-4">
                        <Input
                          id="name"
                          placeholder="Email"
                          className="col-span-3 text-text-primary"
                        />
                      </div>
                      <div className="items-center gap-4">
                        <Input
                          id="username"
                          placeholder="Password"
                          className="col-span-3 text-text-primary"
                        />
                      </div>
                    </div>
                    <DialogFooter className="flex justify-between items-end">
                      <Button
                        className="text-white w-24"
                        size="sm"
                        type="submit"
                      >
                        Login
                      </Button>
                      <Link
                        href={
                          'https://staging.medroster.com/users/password/new'
                        }
                        className="text-primary py-2 hover:text-primary text-lg hover:underline-offset-2 underline"
                      >
                        Forgot Password?
                      </Link>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}