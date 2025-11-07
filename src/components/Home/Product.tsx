import productImage from '@/assets/home/product.jpg'
const Product = () => {
    return (
        <div className='w-full max-w-[300px] overflow-hidden mx-auto relative'>
            <div className='w-full aspect-square'>
                <img src={productImage} className='w-full h-full object-cover' alt="product-1" />
            </div>
            <div className='bg-light p-4 font-poppins space-y-1'>
                <h3 className='line-clamp-1 font-semibold text-xl'>Product Name</h3>
                <h5 className='line-clamp-1 font-medium text-base text-grey'>Stylish cafe chair</h5>
                <h3 className='line-clamp-1 font-medium text-lg'>Rs. 200</h3>
                <button className='w-full bg-white p-3 text-primary font-semibold text-base mt-2 cursor-pointer hover:text-white hover:bg-primary duration-200'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product