import { useState } from "react";
import { createContext } from "react";

export const CartContext=createContext();

export default function CartContextProvider({children}){
    const [cart,setCart]=useState(0);
    function handelChange(){
        setCart(cart+1)
    }
    const obj={
        cart,
        handelChange
    }
    return(
        <CartContext.Provider value={obj} >
            {children}
        </CartContext.Provider>
    )

}