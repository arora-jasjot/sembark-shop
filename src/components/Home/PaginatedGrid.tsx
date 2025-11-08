import { useContext } from "react"
import PaginationMenu from "./PaginationMenu"
import { ProductsContext } from "@/context/ProductsContext"
import Product from "./Product";

const PaginatedGrid = () => {
  const { products, pageNumber, setPageNumber, totalPages } = useContext(ProductsContext);
  const handlePageChange = (new_page: number) => setPageNumber(new_page);
  return (
    <div className="w-full space-y-2">
      <div className="py-10 px-16 grid grid-cols-4 gap-6 items-stretch">
        {
          products.map(product => <Product data={product} />)
        }
      </div>
      <PaginationMenu page={pageNumber} onChangePage={handlePageChange} totalPages={totalPages} />
    </div>
  )
}

export default PaginatedGrid