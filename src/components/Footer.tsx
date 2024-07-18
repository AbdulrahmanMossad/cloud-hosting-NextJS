const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Cloud Hosting</h3>
          <p className="text-sm">
            &copy; 2024 Cloud Hosting. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.497v-9.294H9.691V11.01h3.132V8.414c0-3.1 1.894-4.785 4.658-4.785 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.507 0-1.798.716-1.798 1.764v2.315h3.595l-.468 3.696h-3.127V24h6.129c.724 0 1.324-.6 1.324-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.954 4.569c-.885.385-1.83.641-2.825.758 1.014-.608 1.794-1.574 2.163-2.723-.95.564-2.005.974-3.127 1.196-.896-.959-2.173-1.559-3.587-1.559-2.713 0-4.915 2.203-4.915 4.917 0 .39.043.765.127 1.125C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.71.87 3.217 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.315 0-.624-.031-.924-.086.631 1.951 2.445 3.376 4.6 3.416-1.68 1.319-3.809 2.107-6.102 2.107-.395 0-.779-.023-1.158-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.209-.005-.42-.014-.631.961-.689 1.8-1.56 2.462-2.548l-.047-.02z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.23 0H1.771C.791 0 0 .771 0 1.729v20.542C0 23.23.791 24 1.771 24H22.23C23.209 24 24 23.229 24 22.271V1.729C24 .771 23.209 0 22.23 0zM7.125 20.454H3.557V9.008h3.568v11.446zM5.34 7.629a2.065 2.065 0 01-2.068-2.065c0-1.14.928-2.066 2.068-2.066 1.14 0 2.065.926 2.065 2.066 0 1.137-.925 2.065-2.065 2.065zm15.113 12.825h-3.57v-5.879c0-1.399-.027-3.2-1.946-3.2-1.948 0-2.246 1.518-2.246 3.091v5.988h-3.566V9.008h3.418v1.561h.048c.475-.899 1.637-1.846 3.369-1.846 3.603 0 4.266 2.369 4.266 5.453v6.278z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// const Footer = () => {
//   return (
//     <footer
//       style={{ height: "50px" }}
//       className="flex items-center justify-center text-white bg-gray-700 fixed bottom-0 w-full"
//     >
//       Copyright 2024 Cloud Hosting
//     </footer>
//   )
// }

// export default Footer
