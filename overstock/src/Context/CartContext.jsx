import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(0);
  const [cartData,setCartData]=useState([])
  function handelChange() {
    setCart(cart + 1);
  }

  function addToCart(item) {
    let data=[...cartData,item]
    setCartData(data)
    
  }

  const obj = {
    cart,
    handelChange,
    addToCart,
    cartData
  };

  console.log(cartData)
  return <CartContext.Provider value={obj}>{children}</CartContext.Provider>;
}
