import React from "react"
import AdminSidebar from "./AdminSidebar"
import type { Metadata } from "next"
import { verifyTokenForPage } from "@/utils/verifyToken"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "This is the admin dashboard",
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  const token = cookies().get("jwt")?.value
  if (!token) redirect("/")

  const payload = verifyTokenForPage(token)
  if (payload?.isAdmin === false) redirect("/")

  return (
    <div className="flex flex-col md:flex md:flex-row h-screen ">
      <div className=" bg-gray-900 text-white flex flex-row justify-between w-full md:w-64 md:flex md:flex-col ">
        <AdminSidebar />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</div>
    </div>
  )
}

export default AdminDashboardLayout

// import React from "react"
// import AdminSidebar from "./AdminSidebar"
// import type { Metadata } from "next"
// import { verifyTokenForPage } from "@/utils/verifyToken"
// import { redirect } from "next/navigation"
// import { cookies } from "next/headers"
// interface AdminDashboardLayoutProps {
//   children: React.ReactNode
// }

// export const metadata: Metadata = {
//   title: "Admin Dashboard",
//   description: "This is admin dashboard",
// }

// const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
//   const token = cookies().get("jwt")?.value
//   if (!token) redirect("/")

//   const payload = verifyTokenForPage(token)
//   if (payload?.isAdmin === false) redirect("/")
//   return (
//     <div className="overflow-height flex items-start justify-between overflow-hidden">
//       <div className="overflow-height w-15 lg:w-1/5 bg-gray-950 text-white p-1 lg:p-5">
//         <AdminSidebar />
//       </div>
//       <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
//         {children}
//       </div>
//     </div>
//   )
// }

// export default AdminDashboardLayout
