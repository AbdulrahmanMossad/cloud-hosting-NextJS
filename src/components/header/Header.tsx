import Link from "next/link"
import styles from "./header.module.css"
import Navbar from "./Navbar"
import { cookies } from "next/headers"
import { verifyTokenForPage } from "@/utils/verifyToken"
import LogoutButton from "./LogoutButton"

const Header = () => {
  const token = cookies().get("jwt")?.value || ""
  const payload = verifyTokenForPage(token)

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-400"
        >
          Cloud Hosting
        </Link>
        <Navbar isAdmin={payload?.isAdmin || false} />
        <div className="flex items-center space-x-4">
          {payload ? (
            <div className="flex items-center space-x-4">
              <strong className="text-blue-300 md:text-xl capitalize">
                {payload?.usename}
              </strong>
              <LogoutButton />
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-all duration-300"
                href="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

// import Link from "next/link"
// import styles from "./header.module.css"
// import Navbar from "./Navbar"
// import { cookies } from "next/headers"
// import { verifyTokenForPage } from "@/utils/verifyToken"
// import LogoutButton from "./LogoutButton"

// const Header = () => {
//   console.log("token")
//   const token = cookies().get("jwt")?.value || ""

//   const payload = verifyTokenForPage(token)

//   return (
//     <header className={styles.header}>
//       <Navbar isAdmin={payload?.isAdmin || false} />
//       <div className={styles.right}>
//         {payload ? (
//           <>
//             <strong className="text-blue-800 md:text-xl capitalize">
//               {payload?.usename}
//             </strong>
//             <LogoutButton />
//           </>
//         ) : (
//           <>
//             <Link className={styles.btn} href="/login">
//               Login
//             </Link>
//             <Link className={styles.btn} href="/register">
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header
