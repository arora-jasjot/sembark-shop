/* eslint-disable react-refresh/only-export-components */
import type { Product } from "@/types/product";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface ProductsContextType {
  cartItems: Product[]
}
export const CartContext = createContext<ProductsContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]) //All Products from API

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  useEffect(() => {
  }, []);

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
