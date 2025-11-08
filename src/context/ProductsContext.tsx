/* eslint-disable react-refresh/only-export-components */
import { fetchAllProducts } from "@/api";
import type { ProductType } from "@/types/product";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface ProductsContextType {
  products: ProductType[],
  pageNumber: number,
  setPageNumber: (number: number) => void
  totalPages: number,
  totalProducts: number,
  filteredProducts: number,
  displayLength: number,
  setDisplayLength: (number: number) => void
  sortOption: string,
  setSortOption: (option: string) => void
}
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  pageNumber: 0,
  setPageNumber: () => { },
  totalPages: 0,
  totalProducts: 0,
  filteredProducts: 0,
  displayLength: 10,
  setDisplayLength: () => { },
  sortOption: 'default',
  setSortOption: () => { },
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]) //All Products from API
  const [products, setProducts] = useState<ProductType[]>([]) // Filtered Products to be displayed
  const [filteredProducts, setFilteredProducts] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [displayLength, setDisplayLength] = useState<number>(10);
  const [sortOption, setSortOption] = useState<string>('default');

  useEffect(() => {
    fetchAllProducts().then(data => {
      setAllProducts(data)
      setProducts(data.slice(0, displayLength));
      setTotalPages(Math.ceil(data.length / displayLength))
      setFilteredProducts(data.length)
    });
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(allProducts.length / displayLength))
    setProducts(allProducts.slice((pageNumber-1)*displayLength, pageNumber*displayLength))
    setFilteredProducts(allProducts.length)
  }, [displayLength, pageNumber])

  return (
    <ProductsContext.Provider value={{ products, pageNumber, setPageNumber, totalPages, totalProducts: allProducts.length, filteredProducts, displayLength, setDisplayLength, sortOption, setSortOption }}>
      {children}
    </ProductsContext.Provider>
  );
};
