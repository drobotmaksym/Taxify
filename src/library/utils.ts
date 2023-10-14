import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function concat(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
