import { DOMAIN } from "@/utils/contants"
import { articles } from "./../utils/data"
import { Article } from "@prisma/client"
import { SingleArticle } from "@/utils/types"
// import { DOMAIN } from '@/utils/constants';
// import { SingleArticle } from '@/utils/types';

// Get articles based on page
export async function getArticles(
  page: string | undefined
): Promise<Article[]> {
  const response = await fetch(`${DOMAIN}/api/articles?page=${page}`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to fetch articles")
  }

  const { articles } = await response.json()
  return articles
}

// // Get articles count
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`${DOMAIN}/api/articles/count`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to get articles count")
  }

  const { count } = (await response.json()) as { count: number }
  return count
}

// // Get articles based on searchText
export async function getArticlesBasedOnSearch(
  searchText: string
): Promise<Article[]> {
  const response = await fetch(
    `${DOMAIN}/api/articles/search?keyword=${searchText}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch articles")
  }

  return response.json()
}

// // Get single article by id
export async function getSingleArticle(
  articleId: string
): Promise<SingleArticle> {
  const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to fetch article")
  }

  return response.json()
}
