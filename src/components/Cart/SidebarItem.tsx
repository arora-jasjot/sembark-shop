import DeleteIcon from '@/assets/icons/delete.svg'
import Productimage from '@/assets/home/product.jpg'

const SidebarItem = () => {
    return (
        <div className="py-3 px-6  flex justify-between items-center font-poppins">
            <div className="flex justify-center items-center gap-5">
                <div className="w-20 h-20">
                    <img src={Productimage} className="w-full h-full object-cover rounded-sm" alt="product" />
                </div>
                <div>
                    <h3 className="text-black text-xl font-medium">Product Name</h3>
                    <div className="flex justify-start items-center gap-2 text-grey"><span className="text-black">1</span> x <span className="text-primary font-medium">Rs. 10000</span></div>
                </div>
            </div>
            <img src={DeleteIcon} className="w-5 h-5 cursor-pointer" alt="delete" />
        </div>
    )
}

export default SidebarItem