import { articles } from "./data"
export interface createArticleDto {
  title: string
  description: string
}
export interface UpdateArticleDto {
  title?: string
  description?: string
}
export interface RegisterDto {
  email: string
  usename: string
  password: string
}
export interface LoginDto {
  email: string
  password: string
}
export interface UpdateUserDto {
  email?: string
  usename?: string
  password?: string
}

export interface createCommentDto {
  text: string
  articleId: number
}

export interface UpdateCommentDto {
  text: string
}
