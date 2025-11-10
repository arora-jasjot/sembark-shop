import DeleteIcon from '@/assets/icons/delete.svg'
import Productimage from '@/assets/home/product.jpg'
import type { CartItemType } from '@/types/cart'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

interface SidebarItemProps {
    item: CartItemType
}
const SidebarItem = ({ item }: SidebarItemProps) => {
    const { deleteItem } = useContext(CartContext)
    return (
        <div className="py-3 px-6  flex justify-between items-center font-poppins">
            <div className="flex justify-center items-center gap-5">
                <div className="w-20 h-20">
                    <img src={item.image || Productimage} className="w-full h-full object-cover rounded-sm" alt="product" />
                </div>
                <div>
                    <h3 className="text-black text-xl font-medium">{item.title}</h3>
                    <div className="flex justify-start items-center gap-2 text-grey"><span className="text-black">{item.quantity}</span> x <span className="text-primary font-medium">Rs. {item.price * item.quantity}</span></div>
                </div>
            </div>
            <img src={DeleteIcon} className="w-5 h-5 cursor-pointer" alt="delete" onClick={() => deleteItem(item.id)} />
        </div>
    )
}

export default SidebarItem