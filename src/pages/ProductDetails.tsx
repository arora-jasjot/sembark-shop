import Button from "@/components/Common/Button"
import Footer from "@/components/Common/Footer"
import QuantityButton from "@/components/Common/QuantityButton"
import BreadcrumbsMenu from "@/components/ProductDetails/BreadcrumbsMenu"
import ImagesGrid from "@/components/ProductDetails/ImagesGrid"
import { useState } from "react"

const ProductDetails = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (new_value: number) => {
    setQuantity(new_value)
  }
  return (
    <div className="relative w-full mt-[100px]">
      <BreadcrumbsMenu />
      <div className="flex justify-center items-start w-full py-10 px-16 gap-24 my-10">
        <div className="shrink-0 w-fit">
          <ImagesGrid />
        </div>
        <div className="w-full shrink space-y-5 max-w-[500px]">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium tracking-wide">Product Name</h1>
            <p className="text-black font-normal text-base">Category: <b>Category Name</b></p>
          </div>
          <div className="text-grey font-normal text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati voluptatem quaerat error autem ab ratione corrupti ipsa id consequatur ipsum fugit blanditiis natus alias, iusto eum quasi sapiente distinctio!</div>
          <div className="text-black font-semibold text-lg">Rs. 20000</div>
          <QuantityButton value={quantity} onChange={handleQuantityChange} />
          <Button style='dark' text='Add to Cart' customClassName='border-primary border rounded-sm' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails