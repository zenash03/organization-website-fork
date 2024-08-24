// File khusus functions yang reusable misal number format atau check datanya empty atau tidak

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const functions = {
  isEmptyObject(object) {
    for(let data of object) return false;
    return true;
  },
  oke() {
    
  },
  cn(...inputs) {
    return twMerge(clsx(inputs));
  }
}

export default {
  ...functions
}