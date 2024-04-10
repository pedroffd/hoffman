import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const fadeIn = (direction: string, delay: any) => {
  return {
      hidden: {
          y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
          opacity: 0,
          x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      },
      show: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
              type: "tween",
              duration: 1.2,
              delay: delay,
              ease: [0.25, 0.25, 0.25, 0.75],
          },
      },
  };
};
