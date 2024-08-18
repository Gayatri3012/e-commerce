import { CartProvider } from "@/context/cartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log('app')
  return <CartProvider>
    <Component {...pageProps} />
  </CartProvider> 
  
}
