import React from "react"
import AddArticleForm from "./AddArticleForm"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { verifyTokenForPage } from "@/utils/verifyToken"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Admin Dashboard - Add Article",
  description: "Admin Dashboard for adding new articles",
}

const AdminPage = () => {
  // const token = cookies().get("jwt")?.value;
  // if (!token) redirect("/");

  // const payload = verifyTokenForPage(token);
  // if (payload?.isAdmin === false) redirect("/");

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Add New Article
        </h2>
        <AddArticleForm />
      </div>
    </div>
  )
}

export default AdminPage

// import React from "react"
// import AddArticleForm from "./AddArticleForm"
// import type { Metadata } from "next"
// import { cookies } from "next/headers"

// import { verifyTokenForPage } from "@/utils/verifyToken"
// import { redirect } from "next/navigation"

// // //to change tab name (important for seo )
// // export const metadata: Metadata = {
// //   title: "Admin Dashboard2",
// //   description: "Admin Dashboard2",
// // }
// const AdminPage = () => {
//   //////////////////////////////////////////////we put this code in layout.tsx
//   // const token = cookies().get("jwt")?.value
//   // if (!token) redirect("/")

//   // const payload = verifyTokenForPage(token)
//   // if (payload?.isAdmin === false) redirect("/")
//   return (
//     <div className="fix-height flex items-center justify-center px-5 lg:px-20">
//       <div className="shadow p-4 bg-purple-200 rounded w-full">
//         <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold mb-4">
//           Add New Article
//         </h2>
//         <AddArticleForm />
//       </div>
//     </div>
//   )
// }

// export default AdminPage
