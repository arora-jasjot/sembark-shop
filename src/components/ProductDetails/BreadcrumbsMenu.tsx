import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Link } from 'react-router'

const BreadcrumbsMenu = () => {
  return (
    <div className="sticky top-[100px] bg-accent py-6 px-16 flex justify-start items-center gap-6 z-50 font-poppins">
      <Link to={'/'} className='text-base text-dark font-normal cursor-pointer hover:text-black duration-300'>Home</Link>
      <img src={ArrowRight} className='w-5 h-5' alt="arrow" />
      <div className='h-8 w-0.5 bg-dark'></div>
      <p className='text-base text-black font-normal'>Product Name</p>
    </div>
  )
}

export default BreadcrumbsMenu