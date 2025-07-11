import { twMerge } from "tailwind-merge";

export const cn = (...inputs: string[]) => twMerge(inputs);
