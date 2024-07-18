"use client"
import React, { useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { DOMAIN } from "@/utils/contants"
import ButtonSpinner from "@/components/ButtonSpinner"
import axios from "axios"

const LoginForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "") return toast.error("Email is required")
    if (password === "") return toast.error("Password is required")

    try {
      setLoading(true)
      await axios.post(`${DOMAIN}/api/user/login`, { email, password })
      router.replace("/")
      setLoading(false)
      router.refresh()
    } catch (error: any) {
      toast.error(error?.response?.data.message)
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          disabled={loading}
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? <ButtonSpinner /> : "Sign in"}
        </button>
      </div>
    </form>
  )
}

export default LoginForm

// "use client";
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import { DOMAIN } from '@/utils/contants';
// import ButtonSpinner from '@/components/ButtonSpinner';
// import axios from 'axios';
// const LoginForm = () => {
//     const router = useRouter();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     const formSubmitHandler = async (e:React.FormEvent) => {
//         e.preventDefault();
//         if(email === "") return toast.error("Email is required");
//         if(password === "") return toast.error("Password is required");

//         try {
//             setLoading(true);
//             await axios.post(`${DOMAIN}/api/user/login`, { email, password });
//             router.replace('/');
//             setLoading(false);
//             router.refresh();
//         } catch (error:any) {
//             toast.error(error?.response?.data.message);
//             console.log(error);
//             setLoading(false);
//         }

//     }

//     return (
//         <form onSubmit={formSubmitHandler} className="flex flex-col">
//             <input
//              className="mb-4 border rounded p-2 text-xl"
//              type="email"
//              placeholder="Enter Your Email"
//              value={email}
//              onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//              className="mb-4 border rounded p-2 text-xl"
//              type="password"
//              placeholder="Enter Your Password"
//              value={password}
//              onChange={(e) => setPassword(e.target.value)}
//             />
//             <button disabled={loading} type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
//                 {loading ? <ButtonSpinner /> : "Login"}
//             </button>
//         </form>
//     )
// }

// export default LoginForm
