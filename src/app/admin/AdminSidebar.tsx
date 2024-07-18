import Link from "next/link"
import { CgMenuGridR } from "react-icons/cg"
import { MdOutlineArticle } from "react-icons/md"
import { FaRegComments } from "react-icons/fa"

const AdminSidebar = () => {
  return (
    <div className="p-6">
      <Link
        href="/admin"
        className="flex items-center text-2xl font-bold mb-10"
      >
        <CgMenuGridR className="text-3xl mr-2" />
        Dashboard
      </Link>
      <ul className="space-y-6">
        <li>
          <Link
            className="flex items-center text-xl hover:text-yellow-200 transition"
            href="/admin/articles-table?page=1"
          >
            <MdOutlineArticle className="mr-2" />
            Articles
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center text-xl hover:text-yellow-200 transition"
            href="/admin/comments-table"
          >
            <FaRegComments className="mr-2" />
            Comments
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminSidebar

// import Link from "next/link";
// import { CgMenuGridR } from 'react-icons/cg';
// import { MdOutlineArticle } from 'react-icons/md';
// import { FaRegComments } from 'react-icons/fa';

// const AdminSidebar = () => {
//   return (
//     <>
//       <Link href="/admin" className="flex items-center text-lg lg:text-2xl font-semibold">
//         <CgMenuGridR className="text-3xl me-1" />
//         <span className="hidden lg:block">Dashboard</span>
//       </Link>
//       <ul className="mt-10 flex items-center justify-center flex-col lg:items-start">
//         <Link className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition" href="/admin/articles-table?page=1">
//           <MdOutlineArticle className="me-1" />
//           <span className="hidden lg:block">Articles</span>
//         </Link>
//         <Link className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition" href="/admin/comments-table">
//           <FaRegComments className="me-1" />
//           <span className="hidden lg:block">Comments</span>
//         </Link>
//       </ul>
//     </>
//   )
// }

// export default AdminSidebar;
