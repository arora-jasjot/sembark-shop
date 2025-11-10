import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductsProvider } from './context/ProductsContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
)
