import { getArticles } from "@/apiCalls/articleApiCalls"
import ArticleItem from "@/components/articles/ArticleItem"
import Pagination from "@/components/articles/Pagination"
import SearchArticleInput from "@/components/articles/SearchArticleInput"
import { ARTICLE_PER_PAGE } from "@/utils/contants"
import { Article } from "@prisma/client"
import { resolve } from "path"
import React from "react"
import prisma from "@/utils/db"
interface props {
  searchParams: { page: string }
}
const ArticlesPage = async ({ searchParams }: props) => {
  const { page } = searchParams
  const articles: Article[] = await getArticles(page)
  // const articles: Article[] = allArticles.articles
  // console.log("articles", articles)
  const count: number = await prisma.article.count()
  const pages = Math.ceil(count / ARTICLE_PER_PAGE)
  return (
    <section className="m-auto px-5 container">
      <SearchArticleInput />
      <div className="flex justify-center flex-wrap gap-7 ">
        {articles.map((item, index) => (
          <ArticleItem key={index} article={item} />
        ))}
      </div>
      <Pagination page={parseInt(page)} route="/articles" pages={pages} />
    </section>
  )
}

export default ArticlesPage
