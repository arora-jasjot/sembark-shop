import ArrowRight from '@/assets/icons/arrow-right.svg'
import Footer from "@/components/Common/Footer"
import bannerBg from '@/assets/cart/bannerBg.jpg'
import { Link } from "react-router"
import logo from '@/assets/logo.svg'
import CartItem from '@/components/Cart/CartItem'
import Button from '@/components/Common/Button'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const Cart = () => {
    const { subTotal, tax, total, items } = useContext(CartContext);

    return (
        <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="p-10"
    >
        <div className="relative w-full mt-[100px]">
            <div className="w-full h-fit relative">
                <img src={bannerBg} className="w-full h-auto min-h-[200px] object-cover opacity-50" alt="background" />
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center gap-4 flex-col font-poppins">
                    <img src={logo} className='w-20 h-auto' alt="logo" />
                    <h2 className='text-4xl font-medium text-black'>Cart</h2>
                    <div className='flex justify-center items-center gap-4'>
                        <Link to={'/'} className='text-base text-dark font-normal cursor-pointer hover:text-black duration-300'>Home</Link>
                        <img src={ArrowRight} className='w-5 h-5' alt="arrow" />
                        <p className='text-base text-black font-normal'>Cart</p>
                    </div>
                </div>
            </div>
            <div className='w-full py-10 xs:px-16 px-8 my-10 font-poppins'>
                <div className='lg:grid grid-cols-3 gap-10 items-start space-y-10 lg:space-y-0'>
                    <div className='col-span-2 space-y-5 '>
                        <div className="sm:grid hidden grid-cols-10 bg-accent text-center py-3 rounded-sm font-medium gap-4 items-center">
                            <div className='col-span-3'>Product</div>
                            <div className='col-span-2'>Price</div>
                            <div className='col-span-2'>Quantity</div>
                            <div className='col-span-2'>Subtotal</div>
                            <div className='col-span-1'></div>
                        </div>
                        {
                            items && items.length ?
                            items.map(item => <CartItem key={item.id} item={item} />) : <p>No items in cart</p>
                        }
                    </div>
                    <div className="col-span-1 bg-accent lg:aspect-square flex flex-col justify-between items-center gap-5 p-10">
                        <h2 className='text-2xl font-montserrat font-semibold text-black'>Cart Totals</h2>
                        <div className='space-y-5 w-full mx-auto'>
                            <div className='grid grid-cols-2 text-lg'>
                                <div className='col-span-1 font-medium text-black'>Sub-total:</div>
                                <div className='col-span-1 font-normal text-grey text-end'>Rs. {subTotal}</div>
                            </div>
                            <div className='grid grid-cols-2 text-lg'>
                                <div className='col-span-1 font-medium text-black'>Tax (12%):</div>
                                <div className='col-span-1 font-normal text-grey text-end'>Rs. {tax}</div>
                            </div>
                            <div className='grid grid-cols-2 text-lg'>
                                <div className='col-span-1 font-medium text-black'>Total:</div>
                                <div className='col-span-1 font-normal text-grey text-end'>Rs.{total}</div>
                            </div>
                        </div>
                        <Button style='dark' text='Checkout' customClassName='border-2 border-primary' handleClick={() => {}} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </motion.div>
    )
}

export default Cart