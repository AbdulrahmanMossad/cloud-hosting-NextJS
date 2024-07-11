import { z } from "zod"

export const createValidation = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title must be string",
    })
    .min(2, "at least 2 charachter")
    .max(20, { message: "title must be under 20 char" }),
  description: z.string().min(20),
})

//validation input register
export const registerValidation = z.object({
  email: z.string().min(3).max(200).email(),
  usename: z.string().min(3).max(100),
  password: z.string().min(6),
})

//validation input login
export const loginValidation = z.object({
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
})

export const updateUserSchema = z.object({
  username: z.string().min(2).max(100).optional(),
  email: z.string().min(3).max(200).email().optional(),
  password: z.string().min(6).optional(),
})
export const createCommentSchema = z.object({
  text: z.string().min(2).max(500),
  articleId: z.number(),
})
