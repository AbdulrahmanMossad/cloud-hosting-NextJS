import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting Project",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen justify-between">
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
