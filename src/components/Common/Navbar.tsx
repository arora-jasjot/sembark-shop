import { Link, useLocation } from 'react-router'
import logo from '@/assets/logo.svg'
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const [page, setPage] = useState<"" | "home" | "product" | "cart">("");

  useEffect(() => {
    if (pathname === "/") setPage("home");
    else if (pathname.startsWith("/product")) setPage("product");
    else if (pathname === "/cart") setPage("cart");
  }, [pathname])
  
  return (
    <nav className="py-8 px-16 flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50">
      <div className='flex justify-center items-center gap-1.5'>
        <img src={logo} className='w-12 h-auto' alt='logo' />
        <h1 className='font-bold text-3xl font-montserrat'>Sembark</h1>
      </div>
      <div className='flex justify-center items-center gap-16'>
        <Link to={'/'} className={`text-base hover:font-medium duration-200 flex justify-center items-center gap-1 ${page === 'home' ? 'font-medium text-primary' : 'font-normal text-text'}`}><IoHomeOutline size={16} /> Home</Link>
        <Link to={'/cart'} className={`text-base hover:font-medium duration-200 flex justify-center items-center gap-1 ${page === 'cart' ? 'font-medium text-primary' : 'font-normal text-text'}`}><IoCartOutline size={16} />Cart</Link>
      </div>

    </nav>
  )
}

export default Navbar