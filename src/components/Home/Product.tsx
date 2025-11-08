import { Link } from 'react-router'
import Button from '@/components/Common/Button'
import { type ProductType } from '@/types/product'
const Product = ({ data }: {data: ProductType}) => {
    console.log(data)
    return (
        <Link to={'/product/1'} className='w-full max-w-[300px] overflow-hidden mx-auto relative'>
            <div className='w-full aspect-square'>
                <img src={data.image} className='w-full h-full object-cover' alt="product-1" />
            </div>
            <div className='bg-light p-4 font-poppins space-y-1'>
                <h3 className='line-clamp-1 font-semibold text-xl'>{data.title}</h3>
                <h5 className='line-clamp-1 font-medium text-base text-grey'>{data.description}</h5>
                <h3 className='line-clamp-1 font-medium text-lg'>Rs. {data.price}</h3>
                <Button style='light' text='Add to Cart' customClassName='border-primary border rounded-sm' />
            </div>
        </Link>
    )
}

export default Product