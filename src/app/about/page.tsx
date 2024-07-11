import { Inter, Cairo } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import CloudImage from "./../../../public/cloud-hosting.png"
const inter = Inter({ subsets: ["latin"] })
const AboutPage = () => {
  return (
    // <div className={inter.className}>
    //   اهلا بك
    //   <Link href={"/"}> go to home page </Link>
    //   <Image src={CloudImage} alt="" width={500} height={500} priority />
    //   {/* <Image
    //     src={
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Bundesarchiv_Bild_183-H04436%2C_Klagenfurt%2C_Adolf_Hitler%2C_Ehrenkompanie.jpg/640px-Bundesarchiv_Bild_183-H04436%2C_Klagenfurt%2C_Adolf_Hitler%2C_Ehrenkompanie.jpg"
    //     }
    //     alt=""
    //     width={500}
    //     height={500}
    //     priority
    //   /> */}
    // </div>
    <section className="fix-height container m-auto">
      <h1 className="text-3xl font-bold text-gray-800 p-5">About This App</h1>
      <p className="px-5 text-gray-600 text-xl">
        The best web hosting solution for your online success
      </p>
    </section>
  )
}

export default AboutPage
