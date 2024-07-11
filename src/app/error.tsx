"use client"
import Link from "next/link"
import React from "react"

interface ErrorPageProps {
  error: Error
  reset: () => void // Function to reset the error state to null when the error is resolved.  // reset is a prop passed from the parent component (e.g., a layout component) to the child component (ErrorPage).  // It's used to clear the error message when the error is resolved.  // In this case, the ErrorPage component is a child component of the Layout component.  // The Layout component passes the reset function down to the ErrorPage component through the layoutProps prop.  // This allows the ErrorPage component to reset the error state when the error is resolved.  // The reset function is then passed to the ErrorPage component as a prop.  // This way, the ErrorPage component can perform any necessary cleanup or reset actions when the error is resolved.  // The error state is managed in the parent component (e.g., Layout component) and passed down to the child component (ErrorPage)
}
const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="fix-height pt-7 text-center">
      <div className="text-3xl text-red-600 font-semibold">
        Something went wrong
      </div>
      <h2 className="text-gray-700 my-3 text-xl">
        Error Message: {error.message}
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Try again
      </button>
      <Link className="text-xl underline text-blue-700 block mt-6" href="/">
        Go to home page
      </Link>
    </div>
  )
}

export default ErrorPage
