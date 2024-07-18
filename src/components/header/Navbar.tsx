"use client"
import Link from "next/link"
import { GrTechnology } from "react-icons/gr"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import styles from "./navbar.module.css" // assuming you have a separate CSS module for navbar styles

interface NavbarProps {
  isAdmin: boolean
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* <Link href="/" className={styles.logo}>
          <span>CLOUD</span>
          <GrTechnology className={styles.icon} />
          <span>HOSTING</span>
        </Link> */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {toggle ? <IoMdClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`${styles.navLinksWrapper} ${
            toggle ? styles.showNavLinks : ""
          }`}
        >
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/articles?page=1" onClick={toggleMenu}>
                Articles
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link href="/admin" onClick={toggleMenu}>
                  Admin Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// "use client"
// import Link from "next/link"
// import styles from "./header.module.css"
// import { GrTechnology } from "react-icons/gr"
// import { useState } from "react"
// import { AiOutlineMenu } from "react-icons/ai"
// import { IoMdClose } from "react-icons/io"

// interface NavbarProps {
//   isAdmin: boolean
// }

// const Navbar = ({ isAdmin }: NavbarProps) => {
//   const [toggle, setToggle] = useState(false)

//   return (
//     <nav className={styles.navbar}>
//       <div>
//         <Link href="/" className={styles.logo}>
//           CLOUD
//           <GrTechnology />
//           HOSTING
//         </Link>
//         <div className={styles.menu}>
//           {toggle ? (
//             <IoMdClose onClick={() => setToggle((prev) => !prev)} />
//           ) : (
//             <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
//           )}
//         </div>
//       </div>
//       <div
//         className={styles.navLinksWrapper}
//         style={{
//           clipPath: (toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
//         }}
//       >
//         <ul className={styles.navLinks}>
//           <Link
//             onClick={() => setToggle(false)}
//             className={styles.navLink}
//             href="/"
//           >
//             Home
//           </Link>
//           <Link
//             onClick={() => setToggle(false)}
//             className={styles.navLink}
//             href="/articles?page=1"
//           >
//             Articles
//           </Link>
//           <Link
//             onClick={() => setToggle(false)}
//             className={styles.navLink}
//             href="/about"
//           >
//             About
//           </Link>
//           {isAdmin && (
//             <Link
//               onClick={() => setToggle(false)}
//               className={styles.navLink}
//               href="/admin"
//             >
//               Admin Dashboard
//             </Link>
//           )}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
