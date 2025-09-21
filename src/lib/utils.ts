import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8)
})


export const signUpSchema = z.object({

  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
})

export const signInSchema = z.object({

  email: z.email(),
  password: z.string().min(8),
})
