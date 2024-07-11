import { articles } from "@/utils/data"
import prisma from "@/utils/db"
import { UpdateArticleDto } from "@/utils/dto"
import { createValidation } from "@/utils/validator"
import { verifyToken } from "@/utils/verifyToken"
import { NextRequest, NextResponse } from "next/server"

interface getOneArticleProps {
  params: { id: string } //params object from nextjs navigation api
}
// @method  GET
// @route  ~/api/articles/:id
// @desc   get one article
// @access public
export const GET = async (
  request: NextRequest,
  { params }: getOneArticleProps
) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comments: {
          include: {
            user: {
              select: {
                usename: true,
              },
            },
          },
          orderBy: {
            createdAT: "desc",
          },
        },
      },
    })

    if (!article)
      return NextResponse.json(
        { message: "Article not found" },
        { status: 400 }
      )
    return NextResponse.json(article, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    )
  }
}

// @method  GET
// @route  ~/api/articles/:id
// @desc   get one article
// @access  private (only admin can update article)
export const PUT = async (
  request: NextRequest,
  { params }: getOneArticleProps
) => {
  try {
    const user = verifyToken(request)
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { message: "only admin, access denied" },
        { status: 403 }
      )
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 400 }
      )
    }
    const body = (await request.json()) as UpdateArticleDto
    // console.log(body)
    // const validation = createValidation.safeParse(body)
    // if (!validation.success) {
    //   return NextResponse.json(
    //     { message: validation.error.errors[0].message },
    //     { status: 400 }
    //   )
    // }
    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: { title: body.title, description: body.description },
    })
    return NextResponse.json(updatedArticle, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    )
  }
}
// @method  GET
// @route  ~/api/articles/:id
// @desc   get one article
// @access  private (only admin can delete article)
export const DELETE = async (
  request: NextRequest,
  { params }: getOneArticleProps
) => {
  try {
    const user = verifyToken(request)
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { message: "only admin, access denied" },
        { status: 403 }
      )
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comments: true,
      },
    })
    if (!article)
      return NextResponse.json(
        { message: "Article not found" },
        { status: 400 }
      )
    await prisma.article.delete({ where: { id: parseInt(params.id) } })
    // deleting the comments that belong to this article
    const commentIds: number[] = article?.comments.map((comment) => comment.id)
    await prisma.comment.deleteMany({
      where: { id: { in: commentIds } },
    })
    return NextResponse.json({ message: "article deleted" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      {
        status: 500,
      }
    )
  }
}
