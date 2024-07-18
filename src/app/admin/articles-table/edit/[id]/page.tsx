import { getSingleArticle } from "@/apiCalls/articleApiCalls"
import { Article } from "@prisma/client"
import EditArticleForm from "./EditArticleFrom"

interface EditArticlePageProps {
  params: { id: string }
}

const EditArticlePage = async ({ params }: EditArticlePageProps) => {
  const article: Article = await getSingleArticle(params.id)

  return (
    <section className="flex items-center justify-center min-h-[80%] px-5 lg:px-20 bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl text-green-700 font-semibold mb-6">
          Edit Article
        </h2>
        <EditArticleForm article={article} />
      </div>
    </section>
  )
}

export default EditArticlePage

// import { getSingleArticle } from "@/apiCalls/articleApiCalls"
// import { verifyTokenForPage } from "@/utils/verifyToken"
// import { Article } from "@prisma/client"
// import { cookies } from "next/headers"
// import { redirect } from "next/navigation"
// import EditArticleForm from "./EditArticleFrom"

// interface EditArticlePageProps {
//   params: { id: string }
// }

// const EditArticlePage = async ({ params }: EditArticlePageProps) => {
//   const article: Article = await getSingleArticle(params.id)
//   return (
//     <section className="fix-height flex items-center justify-center px-5 lg:px-20">
//       <div className="shadow p-4 bg-purple-200 rounded w-full">
//         <h2 className="text-2xl text-green-700 font-semibold mb-4">
//           Edit Article
//         </h2>
//         <EditArticleForm article={article} />
//       </div>
//     </section>
//   )
// }

// export default EditArticlePage
