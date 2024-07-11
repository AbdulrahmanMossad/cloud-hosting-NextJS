import { Article, Comment, User } from "@prisma/client"

export type JWT = {
  id: number
  isAdmin: boolean
  usename: string
}
export type CommentWithUser = Comment & { user: User }
export type SingleArticle = Article & { comments: CommentWithUser[] }
