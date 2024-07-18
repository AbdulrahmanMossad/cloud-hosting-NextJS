import { TiTick } from "react-icons/ti"

const WebHostingPlan = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/3 xl:w-1/4 mx-auto mt-7 mb-7">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mb-3">
          Premium Plan
        </h3>
        <strong className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          $4.99/mo
        </strong>
        <span className="bg-red-200 text-red-900 rounded-full px-3 py-1 font-semibold mb-4">
          10% OFF
        </span>
        <div className="mt-6">
          <h5 className="text-xl md:text-2xl lg:text-3xl mb-3 font-semibold text-purple-700">
            Top Features
          </h5>
          <ul className="text-lg md:text-xl lg:text-2xl text-gray-800">
            <li className="flex items-center mb-2">
              <TiTick className="mr-2 text-green-700" /> 100 Websites
            </li>
            <li className="flex items-center mb-2">
              <TiTick className="mr-2 text-green-700" /> 100 GB SSD Storage
            </li>
            <li className="flex items-center mb-2">
              <TiTick className="mr-2 text-green-700" /> Weekly Backups
            </li>
            <li className="flex items-center mb-2">
              <TiTick className="mr-2 text-green-700" /> Unlimited Bandwidth
            </li>
            <li className="flex items-center mb-2">
              <TiTick className="mr-2 text-green-700" /> Free SSL
            </li>
            <li className="flex items-center mb-2">
              <TiTick className="mr-2 text-green-700" /> Free Email
            </li>
          </ul>
        </div>
        <button className="mt-6 bg-gray-900 text-white text-xl md:text-2xl lg:text-3xl font-bold py-2 px-6 rounded-full hover:bg-purple-900 transition w-full">
          BUY NOW
        </button>
      </div>
    </div>
  )
}

export default WebHostingPlan

// import { TiTick } from 'react-icons/ti';

// const WebHostingPlan = () => {
//   return (
//     <div className='flex flex-col items-center justify-center w-3/4 rounded p-4 bg-gray-200 mb-7 md:w-2/4 lg:w-1/4'>
//         <h3 className='text-3xl font-bold text-purple-900'>Premium</h3>
//         <strong className='text-3xl font-bold text-gray-900 my-5'>
//             $4.99/mo
//         </strong>
//         <span className='bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold'>
//             10% OFF
//         </span>
//         <div className='mt-6'>
//             <h5 className='text-2xl mb-1 font-semibold text-purple-700'>
//                 Top Features
//             </h5>
//             <div className='flex items-center text-green-700 mb-1 ps-3'>
//                 <TiTick /> 100 Website
//             </div>
//             <div className='flex items-center text-green-700 mb-1 ps-3'>
//                 <TiTick /> 100 GB SSD Storage
//             </div>
//             <div className='flex items-center text-green-700 mb-1 ps-3'>
//                 <TiTick /> Weekly Backups
//             </div>
//             <div className='flex items-center text-green-700 mb-1 ps-3'>
//                 <TiTick /> Unlimited Bandwidth
//             </div>
//             <div className='flex items-center text-green-700 mb-1 ps-3'>
//                 <TiTick /> Free SLL
//             </div>
//             <div className='flex items-center text-green-700 mb-1 ps-3'>
//                 <TiTick /> Free Email
//             </div>
//         </div>
//         <button className='mt-4 border-2 border-gray-900 text-gray-900 text-2xl font-bold p-1 rounded-full hover:text-white hover:bg-gray-900 transition w-full'>
//             BUY NOW
//         </button>
//     </div>
//   )
// }

// export default WebHostingPlan
