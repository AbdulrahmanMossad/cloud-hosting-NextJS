"use client"
import { CommentWithUser } from "@/utils/types"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-toastify"
import { DOMAIN } from "@/utils/contants"
import UpdateCommentModal from "./UpdateCommentModal"

interface CommentItemProps {
  comment: CommentWithUser
  userId: number | undefined
}

const CommentItem = ({ comment, userId }: CommentItemProps) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const commentDeleteHandler = async () => {
    try {
      if (confirm("Do you want to delete this comment? Are you sure?")) {
        await axios.delete(`${DOMAIN}/api/comments/${comment.id}`)
        router.refresh()
      }
    } catch (error: any) {
      toast.error(error?.response?.data.message)
      console.log(error)
    }
  }

  return (
    <div className="mb-5 rounded-lg p-4 bg-white border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <strong className="text-gray-800 uppercase">
          {comment.user.usename}
        </strong>
        <span className="bg-yellow-600 px-2 py-1 rounded-lg text-white text-sm">
          {new Date(comment.createdAT).toDateString()}
        </span>
      </div>
      <p className="text-gray-800 mb-3">{comment.text}</p>
      {userId && userId === comment.userId && (
        <div className="flex justify-end items-center">
          <FaEdit
            onClick={() => setOpen(true)}
            className="text-green-600 text-xl cursor-pointer mr-3 hover:text-green-800 transition-colors"
          />
          <FaTrash
            onClick={commentDeleteHandler}
            className="text-red-600 text-xl cursor-pointer hover:text-red-800 transition-colors"
          />
        </div>
      )}
      {open && (
        <UpdateCommentModal
          setOpen={setOpen}
          text={comment.text}
          commentId={comment.id}
        />
      )}
    </div>
  )
}

export default CommentItem

// "use client";
// import { CommentWithUser } from '@/utils/types';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// import { toast } from 'react-toastify';
// import { DOMAIN } from '@/utils/contants';
// import UpdateCommentModal from './UpdateCommentModal';

// interface CommentItemProps {
//   comment: CommentWithUser;
//   userId: number | undefined;
// }

// const CommentItem = ({ comment, userId }: CommentItemProps) => {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const commentDeleteHandler = async () => {
//     try {
//       if(confirm("you want delete this comment, Are you sure?")) {
//         await axios.delete(`${DOMAIN}/api/comments/${comment.id}`);
//         router.refresh();
//       }
//     } catch (error:any) {
//       toast.error(error?.response?.data.message);
//       console.log(error);
//     }
//   }

//   return (
//     <div className='mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300'>
//        <div className='flex items-center justify-between mb-2'>
//           <strong className='text-gray-800 uppercase'>
//             {comment.user.usename}
//           </strong>
//           <span className='bg-yellow-700 px-1 rounded-lg text-white'>
//             {new Date(comment.createdAT).toDateString()}
//           </span>
//        </div>
//        <p className='text-gray-800 mb-2'>
//         {comment.text}
//        </p>
//        {userId && userId === comment.userId && (
//         <div className='flex justify-end items-center'>
//          <FaEdit onClick={() => setOpen(true)} className='text-green-600 text-xl cursor-pointer me-3' />
//          <FaTrash onClick={commentDeleteHandler} className='text-red-600 text-xl cursor-pointer' />
//        </div>
//        )}
//        {open &&
//         <UpdateCommentModal
//          setOpen={setOpen}
//          text={comment.text}
//          commentId={comment.id}
//         />
//       }
//     </div>
//   )
// }

// export default CommentItem
