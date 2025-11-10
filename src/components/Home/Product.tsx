import { Link } from 'react-router'
import Button from '@/components/Common/Button'
import { type ProductType } from '@/types/product'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
const Product = ({ data, displayType }: { data: ProductType, displayType: 'grid'|'list' }) => {
    const { addItem } = useContext(CartContext);
    return (
        <Link to={`/product/${data.id}`} className={`w-full overflow-hidden mx-auto relative ${displayType === 'list' ? 'flex items-start w-full justify-start gap-5' : 'sm:max-w-[300px]'}`}>
            <div className={`${displayType === 'grid' ? 'w-full aspect-square' : 'w-[120px] h-[120px] shrink-0'}`}>
                <img src={data.image} className='w-full h-full object-cover' alt="product-1" />
            </div>
            <div className='bg-light p-4 font-poppins space-y-1 w-full'>
                <h3 className={`${displayType === 'grid' ? 'line-clamp-1' : ''} font-semibold text-xl`}>{data.title}</h3>
                <h5 className={`${displayType === 'grid' ? 'line-clamp-1' : 'line-clamp-2'} font-medium text-base text-grey`}>{data.description}</h5>
                <h3 className={`${displayType === 'grid' ? 'line-clamp-1' : ''} font-medium text-lg`}>Rs. {data.price}</h3>
                <Button style='light' text='Add to Cart' customClassName='border-primary border rounded-sm max-w-[200px]'
                    handleClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        addItem(data.id);
                    }}
                />
            </div>
        </Link>
    )
}

export default Product