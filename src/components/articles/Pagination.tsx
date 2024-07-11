import Link from "next/link"

interface PaginationProps {
  pages: number
  page: number
  route: string
}

const Pagination = ({ page, pages, route }: PaginationProps) => {
  let pagesArray: number[] = []
  for (let i = 1; i <= pages; i++) pagesArray.push(i)

  const prev = page - 1
  const next = page + 1

  return (
    <div className="flex items-center justify-center mt-2 mb-10">
      {page !== 1 && (
        <Link
          href={`${route}?page=${prev}`}
          className="border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition"
        >
          Prev
        </Link>
      )}
      {pagesArray.map((page) => (
        <Link
          href={`${route}?page=${page}`}
          className={`${
            page === page ? "bg-gray-400" : ""
          } border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition`}
          key={page}
        >
          {page}
        </Link>
      ))}
      {page !== pages && (
        <Link
          href={`${route}?page=${next}`}
          className="border border-gray-700 text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition"
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Pagination
