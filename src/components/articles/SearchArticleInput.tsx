"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const SearchArticleInput = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ searchText })
    router.push(`/articles/search?searchText=${searchText}`)
  }

  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 mx-auto">
      <input
        className="w-full p-3 rounded-lg text-xl border-none text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="search"
        placeholder="Search for articles"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  )
}

export default SearchArticleInput

// "use client"
// import React, { useState } from "react"
// import { useRouter } from "next/navigation"

// const SearchArticleInput = () => {
//   const router = useRouter()
//   const [searchText, setSearchText] = useState("")

//   const formSubmitHandler = (e: React.FormEvent) => {
//     e.preventDefault()

//     console.log({ searchText })
//     router.push(`/articles/search?searchText=${searchText}`)
//   }

//   return (
//     <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto">
//       <input
//         className="w-full p-3 rounded text-xl border-none text-gray-900"
//         type="search"
//         placeholder="Search for article"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
//     </form>
//   )
// }

// export default SearchArticleInput
