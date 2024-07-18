import Hero from "@/components/home/Hero"
import WebHostingPlan from "@/components/home/WebHostingPlan"

const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Hero />
        <h2 className="text-center mt-10 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Choose Your Web Hosting Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <WebHostingPlan />
          <WebHostingPlan />
          <WebHostingPlan />
        </div>
      </div>
    </section>
  )
}

export default HomePage

// import Header from "@/components/header/Header"
// import Hero from "@/components/home/Hero"
// import WebHostingPlan from "@/components/home/WebHostingPlan"
// const HomePage = () => {
//   return (
//     <section>
//       <Hero />
//       <h2 className="text-center mt-10 text-3xl font-bold">
//         Choose Your Web Hosting Plan
//       </h2>
//       <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
//         <WebHostingPlan />
//         <WebHostingPlan />
//         <WebHostingPlan />
//       </div>
//     </section>
//   )
// }

// export default HomePage
