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
  getProduct: (id: number) => ProductType | null
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
  getProduct: () => null
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
    let filtered_data;
    if(sortOption === 'default') filtered_data = allProducts;
    else if(sortOption === 'a-z') filtered_data = allProducts.sort((a, b) => a.title.localeCompare(b.title));
    else if(sortOption === 'z-a') filtered_data = allProducts.sort((a, b) => b.title.localeCompare(a.title));
    else if(sortOption === 'high-low') filtered_data = allProducts.sort((a, b) => b.price - a.price);
    else if(sortOption === 'low-high') filtered_data = allProducts.sort((a, b) => a.price - b.price);
    else filtered_data = allProducts;
    setTotalPages(Math.ceil(filtered_data.length / displayLength))
    setProducts(filtered_data.slice((pageNumber-1)*displayLength, pageNumber*displayLength))
    setFilteredProducts(filtered_data.length)
  }, [displayLength, pageNumber, sortOption])

  const getProduct = (id: number) => allProducts.find(product => product.id === id) || null

  return (
    <ProductsContext.Provider value={{ products, pageNumber, setPageNumber, totalPages, totalProducts: allProducts.length, filteredProducts, displayLength, setDisplayLength, sortOption, setSortOption, getProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
