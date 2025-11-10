import Productimage from '@/assets/home/product.jpg'
import { useContext } from 'react'
import QuantityButton from '@/components/Common/QuantityButton'
import DeleteIcon from '@/assets/icons/delete.svg'
import { CartContext } from '@/context/CartContext'
import type { CartItemType } from '@/types/cart'

interface CartItemProps {
    item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
    const { updateItem , deleteItem} = useContext(CartContext)
    const handleQuantityChange = (new_value: number) => {
        updateItem(item.id, new_value)
    }

    return (
        <div className='grid grid-cols-10 py-3 gap-4 items-center'>
            <div className='col-span-1 aspect-square'>
                <img src={item.image || Productimage} className='w-full h-full aspect-square' alt="product" />
            </div>
            <div className='col-span-2 font-medium text-lg text-grey'>{item.title}</div>
            <div className='col-span-2 font-medium text-lg text-grey text-center'>Rs. {item.price}</div>
            <div className='col-span-2 flex justify-center items-center'>
                <QuantityButton value={item.quantity} onChange={handleQuantityChange} />
            </div>
            <div className='col-span-2 font-medium text-lg text-black text-center'>Rs. {(item.price || 0) * item.quantity}</div>
            <div className='col-span-1 flex justify-center items-center'>
                <img src={DeleteIcon} className='w-5 h-5 cursor-pointer' alt="delete" onClick={() => deleteItem(item.id)} />
            </div>
        </div>
    )
}

export default CartItem