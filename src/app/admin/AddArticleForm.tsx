"use client"
import React, { useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import axios from "axios"
import { DOMAIN } from "@/utils/contants"

const AddArticleForm = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (title === "") return toast.error("Title is required")
    if (description === "") return toast.error("Description is required")
    try {
      await axios.post(`${DOMAIN}/api/articles`, { title, description })
      setTitle("")
      setDescription("")
      toast.success("New article added")
      router.refresh()
    } catch (error: any) {
      toast.error(error?.response?.data.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="space-y-4">
      <input
        className="w-full p-3 border border-gray-300 rounded-lg"
        type="text"
        placeholder="Enter Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg"
        rows={5}
        placeholder="Enter Article Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Add Article
      </button>
    </form>
  )
}

export default AddArticleForm

// "use client"
// import React, { useState } from "react"
// import { toast } from "react-toastify"
// import { useRouter } from "next/navigation"
// import axios from "axios"
// import { DOMAIN } from "@/utils/contants"

// const AddArticleForm = () => {
//   const router = useRouter()
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")

//   const formSubmitHandler = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (title === "") return toast.error("Title is required")
//     if (description === "") return toast.error("Description is required")
//     try {
//       await axios.post(`${DOMAIN}/api/articles`, { title, description })
//       setTitle("")
//       setDescription("")
//       toast.success("New article added")
//       router.refresh()
//     } catch (error: any) {
//       toast.error(error?.response?.data.message)
//       console.log(error)
//     }
//   }

//   return (
//     <form onSubmit={formSubmitHandler} className="flex flex-col">
//       <input
//         className="mb-4 border rounded p-2 text-xl"
//         type="text"
//         placeholder="Enter Article Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         className="mb-4 p-2 lg:text-xl rounded resize-none"
//         rows={5}
//         placeholder="Enter Artilce Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <button
//         type="submit"
//         className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold"
//       >
//         Add
//       </button>
//     </form>
//   )
// }

// export default AddArticleForm
