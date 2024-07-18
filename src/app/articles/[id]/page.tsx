import { getSingleArticle } from "@/apiCalls/articleApiCalls"
import CommentItem from "@/components/articles/CommentItem"
import AddCommentForm from "@/components/comments/AddCommentForm"
import { SingleArticle } from "@/utils/types"
import { verifyTokenForPage } from "@/utils/verifyToken"
import { cookies } from "next/headers"
import prisma from "@/utils/db"
import { redirect } from "next/navigation"
import React from "react"

interface SingleArticlePageProps {
  params: { id: string }
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const token = cookies().get("jwt")?.value || ""
  const payload = verifyTokenForPage(token)

  const article = (await prisma.article.findUnique({
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
  })) as SingleArticle

  if (!article) {
    redirect("/not-found")
  }

  return (
    <section className="fix-height container mx-auto w-full px-5 pt-8 md:w-3/4 ">
      <div className="bg-white p-7 rounded-lg mb-7 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {article.title}
        </h1>
        <div className="text-gray-500 text-sm">
          {new Date(article.createdAt).toDateString()}
        </div>
        <p className="text-gray-700 text-lg mt-5 leading-relaxed">
          {article.description}
        </p>
      </div>
      <div className="mt-7">
        {payload ? (
          <AddCommentForm articleId={article.id} />
        ) : (
          <p className="text-blue-600 text-xl">
            To write a comment, you should log in first.
          </p>
        )}
      </div>
      <h4 className="text-2xl text-gray-800 font-semibold mb-4 mt-7">
        Comments
      </h4>
      <div className="space-y-5 mb-5">
        {article.comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            userId={payload?.id}
          />
        ))}
      </div>
    </section>
  )
}

export default SingleArticlePage

// import { getSingleArticle } from "@/apiCalls/articleApiCalls"
// import CommentItem from "@/components/articles/CommentItem"
// import AddCommentForm from "@/components/comments/AddCommentForm"
// import { SingleArticle } from "@/utils/types"
// import { verifyTokenForPage } from "@/utils/verifyToken"
// import { Article } from "@prisma/client"
// import { cookies } from "next/headers"
// import prisma from "@/utils/db"
// import { redirect, useParams } from "next/navigation"
// import React from "react"

// interface SingleArticlePageProps {
//   params: { id: string }
// }
// const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
//   const token = cookies().get("jwt")?.value || ""
//   const payload = verifyTokenForPage(token)

//   //const article: SingleArticle = await getSingleArticle(params.id);

//   const article = (await prisma.article.findUnique({
//     where: { id: parseInt(params.id) },
//     include: {
//       comments: {
//         include: {
//           user: {
//             select: {
//               usename: true,
//             },
//           },
//         },
//         orderBy: {
//           createdAT: "desc",
//         },
//       },
//     },
//   })) as SingleArticle

//   if (!article) {
//     redirect("/not-found")
//   }
//   return (
//     <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
//       <div className="bg-white p-7 rounded-lg mb-7">
//         <h1 className="text-3xl font-bold text-gray-700 mb-2">
//           {article.title}
//         </h1>
//         <div className="text-gray-400">
//           {new Date(article.createdAt).toDateString()}
//         </div>
//         <p className="text-gray-800 text-xl mt-5">{article.description}</p>
//       </div>
//       <div className="mt-7">
//         {payload ? (
//           <AddCommentForm articleId={article.id} />
//         ) : (
//           <p className="text-blue-600 md:text-xl">
//             to write a comment you should log in first
//           </p>
//         )}
//       </div>
//       <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
//         Comments
//       </h4>
//       {article.comments.map((comment) => (
//         <CommentItem key={comment.id} comment={comment} userId={payload?.id} />
//       ))}
//     </section>
//   )
// }

// export default SingleArticlePage
