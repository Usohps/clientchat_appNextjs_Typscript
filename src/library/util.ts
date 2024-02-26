// create a utilitty classNAme for a button component

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// install clsx for conditional rendering and tailwindmerge to merge the styles, this help to control any other styling on creation of any resuseable component without any conflict with the customized style
export function cn (...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}