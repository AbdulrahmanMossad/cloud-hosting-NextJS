import React from "react"
import RegisterForm from "./RegisterForm"

const RegisterPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h1 className="text-center text-4xl font-extrabold text-gray-900">
            Create New Account
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {" "}
              start your 14-day free trial
            </a>
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  )
}

export default RegisterPage

// import React from "react"
// import RegisterForm from "./RegisterForm"

// const RegisterPage = () => {
//   return (
//     <section className="fix-height container m-auto px-7 flex items-center justify-center">
//       <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
//         <h1 className="text-3xl font-bold text-gray-800 mb-5">
//           Create New Account
//         </h1>
//         <RegisterForm />
//       </div>
//     </section>
//   )
// }

// export default RegisterPage
