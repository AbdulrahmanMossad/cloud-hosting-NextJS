import { ARTICLE_PER_PAGE } from "@/utils/contants"
import { articles } from "./../../../utils/data"
// import { articles } from "@/utils/data"
import prisma from "@/utils/db"
import { createArticleDto } from "@/utils/dto"
import { createValidation } from "@/utils/validator"
import { Article } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { verifyToken } from "@/utils/verifyToken"

// @method  GET
// @route  ~/api/articles?page=number
// @desc   get all articles
// @access public
export const GET = async (request: NextRequest) => {
  try {
    const page = parseInt(request.nextUrl.searchParams.get("page") || "")

    let articles: Article[]
    if (!page) {
      articles = await prisma.article.findMany({})
    } else {
      articles = await prisma.article.findMany({
        take: ARTICLE_PER_PAGE,
        skip: (page - 1) * ARTICLE_PER_PAGE,
      })
    }
    return NextResponse.json(
      {
        page: page ? page : 1,
        articles,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    )
  }
}
// @method  POST
// @route  ~/api/articles
// @desc   post article
// @access  private (only admin can create article)
export const POST = async (request: NextRequest) => {
  try {
    const user = verifyToken(request)
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { message: "only admin, access denied" },
        { status: 403 }
      )
    }
    const body = (await request.json()) as createArticleDto
    // console.log(body)
    //aplly validation on body
    const validation = createValidation.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      )
    }
    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    })
    return NextResponse.json(newArticle, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    )
  }
}
