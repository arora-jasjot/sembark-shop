/* eslint-disable react-refresh/only-export-components */
import { fetchAllProducts } from "@/api";
import type { Product } from "@/types/product";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface ProductsContextType {
  products: Product[]
}
export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]) //All Products from API
  const [products, setProducts] = useState<Product[]>([]) // Filtered Products to be displayed

  useEffect(() => {
    console.log(allProducts)
  }, [allProducts])

  useEffect(() => {
    fetchAllProducts().then(data => {
      setAllProducts(data)
      setProducts(data);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
