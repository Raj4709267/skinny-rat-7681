import {Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cartData } = useContext(CartContext);
  console.log(cartData);
  return (
    <div style={{marginTop:"30px"}} >
      {cartData.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "20px",
              border: "1px solid black",
              marginBottom: "20px",
              padding:"20px",
              borderRadius:"10px"
            }}
          >
            <Image height={"70px"} src={item.img} alt={item.img} />
            <div>
              <p>{item.p1}</p>
              <p>{item.p2}</p>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default Cart;
