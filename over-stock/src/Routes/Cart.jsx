 import {Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartCard from "../components/Cart/Cart";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cartData } = useContext(CartContext);
  console.log(cartData);
  return (
    <div style={{marginTop:"30px"}} >
      {cartData.map((item) => {
        return (
          <CartCard key={item.id} {...item} />
        )
      })}
    </div>
  );
}

export default Cart;
