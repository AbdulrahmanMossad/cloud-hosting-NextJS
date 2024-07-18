import React from "react"
import Link from "next/link"
import { Article } from "@prisma/client"

interface ArticleItemProps {
  article: Article
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="p-5 rounded-lg my-3 shadow-lg border border-gray-300 hover:bg-gray-100 w-full md:w-2/5 lg:w-1/4 transition-colors duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
        {article.title}
      </h3>
      <p className="text-gray-700 mb-4 line-clamp-2">{article.description}</p>
      <Link
        className="text-lg bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg block text-center"
        href={`/articles/${article.id}`}
      >
        Read More
      </Link>
    </div>
  )
}

export default ArticleItem

// import React from "react"
// import { Interface } from "readline"
// // import { Article } from "@/utils/types"
// import Link from "next/link"
// import { Article } from "@prisma/client"
// interface ArticleItemProps {
//   article: Article // your custom type for Article
// }
// const ArticleItem = ({ article }: ArticleItemProps) => {
//   return (
//     <div className="p-5 rounded-lg my-1 shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4">
//       <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
//         {article.title}
//       </h3>
//       <p className="my-2 text-xl text-gray-700 p-1 line-clamp-1">
//         {article.description}
//       </p>
//       <Link
//         className="text-xl bg-purple-700 hover:bg-purple-800 w-full block text-center p-1 text-white rounded-lg"
//         href={`/articles/${article.id}`}
//       >
//         Read More
//       </Link>
//     </div>
//   )
// }

// export default ArticleItem
