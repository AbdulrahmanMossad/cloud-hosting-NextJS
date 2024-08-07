"use client"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { DOMAIN } from "@/utils/contants"

const LogoutButton = () => {
  const router = useRouter()
  const logoutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/user/logout`)
      router.push("/")
      router.refresh()
    } catch (error) {
      toast.warning("Something went wrong")
      console.log(error)
    }
  }

  return (
    <button
      onClick={logoutHandler}
      className="bg-gray-700 text-gray-200 px-1 rounded"
    >
      Logout
    </button>
  )
}

export default LogoutButton
