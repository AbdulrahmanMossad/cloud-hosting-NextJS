import { TiTick } from "react-icons/ti"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-12 text-center">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Cloud Hosting
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          The best web hosting solution for your online success
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center text-lg text-gray-700">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <TiTick className="mr-2" /> Easy To Use Control Panel
          </div>
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <TiTick className="mr-2" /> Secure Hosting
          </div>
          <div className="flex items-center">
            <TiTick className="mr-2" /> Website Maintenance
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// import React from "react"
// import styles from "./hero.module.css"
// import { TiTick } from "react-icons/ti"
// import Image from "next/image"
// import CloudImage from "../../../public/cloud-hosting.png"
// const Hero = () => {
//   return (
//     <div className={styles.hero}>
//       <div className={styles.heroLeft}>
//         <h1 className={styles.title}>Cloud Hosting</h1>
//         <p className={styles.desc}>
//           The best web hosting solution for your online success
//         </p>
//         <div className={styles.services}>
//           <div className={styles.serviceItem}>
//             <TiTick /> Easy To Use Control Panel
//           </div>
//           <div className={styles.serviceItem}>
//             <TiTick /> Secure Hosting
//           </div>
//           <div className={styles.serviceItem}>
//             <TiTick /> Website Maintenance
//           </div>
//         </div>
//       </div>
//       <div>
//         <Image src={CloudImage} alt="cloud" width={500} height={500} />
//       </div>
//     </div>
//   )
// }

// export default Hero
