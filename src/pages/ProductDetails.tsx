import Button from "@/components/Common/Button"
import Footer from "@/components/Common/Footer"
import QuantityButton from "@/components/Common/QuantityButton"
import BreadcrumbsMenu from "@/components/ProductDetails/BreadcrumbsMenu"
import ImagesGrid from "@/components/ProductDetails/ImagesGrid"
import { CartContext } from "@/context/CartContext"
import { ProductsContext } from "@/context/ProductsContext"
import type { ProductType } from "@/types/product"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { ClipLoader } from 'react-spinners'

const ProductDetails = () => {
  const { getProduct, allProducts } = useContext(ProductsContext);
  const { addItem } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (new_value: number) => {
    setQuantity(new_value)
  }
  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState<ProductType | null>(null);

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
    if (allProducts.length > 0) {
      const _data = getProduct(Number(id));
      if (_data) {
        setData(_data);
      } else {
        navigate(-1);
      }
    }
  }, [id, allProducts])
  return (
    <div className="relative w-full mt-[100px]">
      <BreadcrumbsMenu />
      {!data ? <div className="flex justify-center items-center p-16"><ClipLoader /></div> :
      <div className="sm:flex justify-center items-start w-full py-10 px-16 gap-24 my-10 space-y-10">
        <div className="shrink-0 w-fit mx-auto sm:mx-0">
          <ImagesGrid image={data.image || null} />
        </div>
        <div className="w-full shrink space-y-5 max-w-[500px]">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium tracking-wide">{data.title}</h1>
            <p className="text-black font-normal text-base">Category: <b>{data.category}</b></p>
          </div>
          <div className="text-grey font-normal text-base">{data.description}</div>
          <div className="text-black font-semibold text-lg">Rs. {data.price}</div>
          <QuantityButton value={quantity} onChange={handleQuantityChange} />
          <Button style='dark' text='Add to Cart' customClassName='border-primary border rounded-sm' handleClick={() => addItem(Number(id))} />
        </div>
      </div>
}
      <Footer />
    </div>
  )
}

export default ProductDetails