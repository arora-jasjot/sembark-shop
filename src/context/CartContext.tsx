/* eslint-disable react-refresh/only-export-components */
import { fetchAllCartItems } from "@/api";
import type { CartItemType, CartType } from "@/types/cart";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ProductsContext } from "./ProductsContext";

interface CartContextType {
  cartItems: CartType,
  updateItem: (productId: number, quantity: number) => void,
  deleteItem: (id: number) => void,
  addItem: (id: number) => void,
  items: CartItemType[] | null,
  subTotal: number,
  tax: number,
  total: number
}
export const CartContext = createContext<CartContextType>({
  cartItems: {
    id: 0,
    userId: 0,
    date: "",
    products: []
  },
  updateItem: () => { },
  deleteItem: () => { },
  addItem: () => { },
  items: null,
  subTotal: 0,
  tax: 0,
  total: 0
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { allProducts } = useContext(ProductsContext);

  const [cartItems, setCartItems] = useState<CartType>({
    id: 0,
    userId: 0,
    date: "",
    products: []
  })
  const [items, setItems] = useState<CartItemType[] | null>(null);
  const [subTotal, setSubTotal] = useState<number>(0)
  const [tax, setTax] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const storedData = getDataToLocalStorage();
    if (storedData && storedData.userId) {
      setCartItems(storedData)
    }
    else {
      fetchAllCartItems().then(data => {
        setCartItems(data.find((cart: CartType) => cart.userId === 2))
      });
    }
  }, []);

  useEffect(() => {
    if (cartItems && allProducts.length) {
      const _items = cartItems.products
        .map((item) => {
          const productData = allProducts.find(
            (product) => product.id === item.productId
          );
          if (productData) {
            const cart: CartItemType = { ...productData, quantity: item.quantity };
            return cart;
          }
        })
        .filter((item): item is CartItemType => Boolean(item));
      setItems(_items);
    }
  }, [cartItems, allProducts])

  useEffect(() => {
    if(cartItems) setDataToLocalStorage(cartItems);
  }, [cartItems])

  useEffect(() => {
    if (items) {
      const subtotal = Number((items.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2));
      const tax = Number((0.12 * subtotal).toFixed(2))
      const total = Number((subtotal + tax).toFixed(2));
      setSubTotal(subtotal)
      setTax(tax)
      setTotal(total)
    }
  }, [items])

  const setDataToLocalStorage = (data: CartType) => {
    localStorage.setItem('sembark-cart', JSON.stringify(data));
  }

  const getDataToLocalStorage = () => {
    const data = localStorage.getItem('sembark-cart');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  const updateItem = (_productid: number, _quantity: number) => {
    setCartItems((cartItems) => {
      const products = cartItems.products.map((product) =>
        product.productId === _productid
          ? { ...product, quantity: _quantity }
          : product
      );

      return { ...cartItems, products };
    });
  }

  const deleteItem = (id: number) => {
    setCartItems((cartItems) => {
      const products = cartItems.products.filter((product) =>
        product.productId !== id
      );

      return { ...cartItems, products };
    });
  }
  
  const addItem = (id: number) => {
    setCartItems((cartItems) => {
      const products = [...cartItems.products, {
        productId: id,
        quantity: 1
      }]
  
      return { ...cartItems, products };
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, updateItem, subTotal, tax, total, items, deleteItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
