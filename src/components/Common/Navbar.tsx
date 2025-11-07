import { Link } from 'react-router'
import logo from '@/assets/logo.svg'

interface NavbarProps{
  page: 'home' | 'cart' | 'product';
}

const Navbar = ({ page } : NavbarProps) => {
  return (
    <nav className="py-8 px-16 flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50">
      <div className='flex justify-center items-center gap-1.5'>
        <img src={logo} className='w-12 h-auto' alt='logo' />
        <h1 className='font-bold text-3xl font-montserrat'>Sembark</h1>
      </div>
      <div className='flex justify-center items-center gap-16'>
        <Link to={'/'} className={`text-base hover:font-medium duration-200 ${page === 'home' ? 'font-medium text-primary' : 'font-normal text-text'}`}>Home</Link>
        <Link to={'/cart'} className={`text-base hover:font-medium duration-200 ${page === 'cart' ? 'font-medium text-primary' : 'font-normal text-text'}`}>Cart</Link>
      </div>
      
    </nav>
  )
}

export default Navbar