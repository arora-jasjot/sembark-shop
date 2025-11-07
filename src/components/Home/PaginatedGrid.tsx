import PaginationMenu from "./PaginationMenu"
import Product from "./Product"

const PaginatedGrid = () => {
  return (
    <div className="w-full space-y-2">
        <div className="py-10 px-16 grid grid-cols-4 gap-6 items-stretch">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        <PaginationMenu />
    </div>
  )
}

export default PaginatedGrid