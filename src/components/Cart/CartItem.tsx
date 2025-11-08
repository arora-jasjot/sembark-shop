import Productimage from '@/assets/home/product.jpg'
import { useState } from 'react'
import QuantityButton from '@/components/Common/QuantityButton'
import DeleteIcon from '@/assets/icons/delete.svg'

const CartItem = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const handleQuantityChange = (new_value: number) => {
        setQuantity(new_value)
    }
    return (
        <div className='grid grid-cols-10 py-3 gap-4 items-center'>
            <div className='col-span-1 aspect-square'>
                <img src={Productimage} className='w-full h-full aspect-square' alt="product" />
            </div>
            <div className='col-span-2 font-medium text-lg text-grey'>Product Name</div>
            <div className='col-span-2 font-medium text-lg text-grey text-center'>Rs. 1500</div>
            <div className='col-span-2 flex justify-center items-center'>
                <QuantityButton value={quantity} onChange={handleQuantityChange} />
            </div>
            <div className='col-span-2 font-medium text-lg text-black text-center'>Rs. 1500</div>
            <div className='col-span-1 flex justify-center items-center'>
                <img src={DeleteIcon} className='w-5 h-5 cursor-pointer' alt="delete" />
            </div>
        </div>
    )
}

export default CartItem