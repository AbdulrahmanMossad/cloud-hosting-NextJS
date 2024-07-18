const AboutPage = () => {
  return (
    <section className="flex flex-col h-[500px] bg-gray-100">
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 text-center">
          About This App
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 text-center">
          Our mission at Cloud Hosting is to provide the best web hosting
          solutions tailored to your needs. Whether you are a small business
          looking to establish your online presence or a large enterprise
          needing robust hosting infrastructure, we are here to support you
          every step of the way.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 text-center">
          We prioritize security, reliability, and ease of use in everything we
          do. With cutting-edge technology and a commitment to exceptional
          customer service, we ensure that your websites and applications run
          smoothly, allowing you to focus on what matters most - growing your
          business.
        </p>
      </div>
    </section>
  )
}

export default AboutPage

// import { Inter, Cairo } from "next/font/google"
// import Image from "next/image"
// import Link from "next/link"
// import CloudImage from "./../../../public/cloud-hosting.png"
// const inter = Inter({ subsets: ["latin"] })
// const AboutPage = () => {
//   return (
//     // <div className={inter.className}>
//     //   اهلا بك
//     //   <Link href={"/"}> go to home page </Link>
//     //   <Image src={CloudImage} alt="" width={500} height={500} priority />
//     //   {/* <Image
//     //     src={
//     //       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Bundesarchiv_Bild_183-H04436%2C_Klagenfurt%2C_Adolf_Hitler%2C_Ehrenkompanie.jpg/640px-Bundesarchiv_Bild_183-H04436%2C_Klagenfurt%2C_Adolf_Hitler%2C_Ehrenkompanie.jpg"
//     //     }
//     //     alt=""
//     //     width={500}
//     //     height={500}
//     //     priority
//     //   /> */}
//     // </div>
//     <section className="fix-height container m-auto">
//       <h1 className="text-3xl font-bold text-gray-800 p-5">About This App</h1>
//       <p className="px-5 text-gray-600 text-xl">
//         The best web hosting solution for your online success
//       </p>
//     </section>
//   )
// }

// export default AboutPage
