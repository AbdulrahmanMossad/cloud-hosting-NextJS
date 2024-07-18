"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Article } from "@prisma/client";
import { DOMAIN } from "@/utils/contants";

interface EditArticleFormProps {
  article: Article;
}

const EditArticleForm = ({ article }: EditArticleFormProps) => {
  const router = useRouter();
  const [title, setTitle] = useState(article.title);
  const [description, setDescription] = useState(article.description);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title is required");
    if (description === "") return toast.error("Description is required");

    try {
      await axios.put(`${DOMAIN}/api/articles/${article.id}`, {
        title,
        description,
      });
      toast.success("Article updated");
      router.refresh();
    } catch (error: any) {
      toast.error(error?.response?.data.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="space-y-6">
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
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
      >
        Edit Article
      </button>
    </form>
  );
};

export default EditArticleForm;

// "use client"
// import React, { useState } from "react"
// import { toast } from "react-toastify"
// import axios from "axios"
// import { useRouter } from "next/navigation"
// import { Article } from "@prisma/client"
// import { DOMAIN } from "@/utils/contants"

// interface EditArticleFormProps {
//   article: Article
// }

// const EditArticleForm = ({ article }: EditArticleFormProps) => {
//   const router = useRouter()
//   const [title, setTitle] = useState(article.title)
//   const [description, setDescription] = useState(article.description)

//   const formSubmitHandler = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (title === "") return toast.error("Title is required")
//     if (description === "") return toast.error("Description is required")

//     try {
//       await axios.put(`${DOMAIN}/api/articles/${article.id}`, {
//         title,
//         description,
//       })
//       toast.success("article updated")
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
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         className="mb-4 p-2 lg:text-xl rounded resize-none"
//         rows={5}
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <button
//         type="submit"
//         className="text-2xl text-white bg-green-700 hover:bg-green-900 p-2 rounded-lg font-bold"
//       >
//         Edit
//       </button>
//     </form>
//   )
// }

// export default EditArticleForm
