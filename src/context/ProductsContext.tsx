/* eslint-disable react-refresh/only-export-components */
import { fetchAllCategories, fetchAllProducts } from "@/api";
import type { ProductType } from "@/types/product";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router";

interface ProductsContextType {
  products: ProductType[],
  allProducts: ProductType[],
  pageNumber: number,
  setPageNumber: (number: number) => void
  totalPages: number,
  totalProducts: number,
  filteredProducts: number,
  displayLength: number,
  setDisplayLength: (number: number) => void
  sortOption: string,
  setSortOption: (option: string) => void
  getProduct: (id: number) => ProductType | null,
  loading: boolean,
  categories: string[],
  selectedCategory: string | null,
  setSelectedCategory: (new_category: string | null) => void
}
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  allProducts: [],
  pageNumber: 0,
  setPageNumber: () => { },
  totalPages: 0,
  totalProducts: 0,
  filteredProducts: 0,
  displayLength: 10,
  setDisplayLength: () => { },
  sortOption: '',
  setSortOption: () => { },
  getProduct: () => null,
  loading: true,
  categories: [],
  selectedCategory: null,
  setSelectedCategory: () => {}
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {

  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);


  const initialSort = searchParams.get("sortby") || "";
  const initialLength = Number(searchParams.get("pageSize")) || 10;
  const initialCategory = searchParams.get("category") || "";

  const [allProducts, setAllProducts] = useState<ProductType[]>([]) //All Products from API
  const [products, setProducts] = useState<ProductType[]>([]) // Filtered Products to be displayed
  const [filteredProducts, setFilteredProducts] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [displayLength, setDisplayLength] = useState<number>(initialLength);
  const [sortOption, setSortOption] = useState<string>(initialSort);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  useEffect(() => {
    fetchAllCategories().then(data => {
      setCategories(data)
    })
  }, []);

  useEffect(() => {
    filterData(allProducts)
  }, [displayLength, pageNumber, allProducts])

  useEffect(() => {
    refetchData()
  }, [selectedCategory, sortOption])
  
  const filterData = (products: ProductType[]) => {
    // let filtered_data;
    // if(sortOption === 'default') filtered_data = products;
    // else if(sortOption === 'a-z') filtered_data = products.sort((a, b) => a.title.localeCompare(b.title));
    // else if(sortOption === 'z-a') filtered_data = products.sort((a, b) => b.title.localeCompare(a.title));
    // else if(sortOption === 'high-low') filtered_data = products.sort((a, b) => b.price - a.price);
    // else if(sortOption === 'low-high') filtered_data = products.sort((a, b) => a.price - b.price);
    // else filtered_data = products;
    const filtered_data = products;
    setTotalPages(Math.ceil(filtered_data.length / displayLength))
    setProducts(filtered_data.slice((pageNumber-1)*displayLength, pageNumber*displayLength))
    setFilteredProducts(filtered_data.length)
    setLoading(false)
  }

  const refetchData = () => {
    setLoading(true);
    fetchAllProducts(selectedCategory, sortOption).then(data => {
      setAllProducts(data)
    })
  }

  const getProduct = (id: number) => allProducts.find(product => product.id === id) || null

  return (
    <ProductsContext.Provider value={{ allProducts, products, pageNumber, setPageNumber, totalPages, totalProducts: allProducts.length, filteredProducts, displayLength, setDisplayLength, sortOption, setSortOption, getProduct, loading, categories, selectedCategory, setSelectedCategory }}>
      {children}
    </ProductsContext.Provider>
  );
};
