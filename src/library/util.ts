// create a utilitty classNAme for a button component

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// install clsx for conditional rendering and tailwindmerge to merge th styles
export function cn (...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}