import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Common/Navbar";
import CartShortcut from "./components/Cart/CartShortcut";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div className="w-full relative">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AnimatePresence>
        <CartShortcut />
    </div>
  )
}

export default App