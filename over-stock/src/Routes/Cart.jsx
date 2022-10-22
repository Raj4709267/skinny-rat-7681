import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import CartCard from "../components/Cart/Cart";
import { CartContext } from "../Context/CartContext";
import style from "../components/Cart/Cart.module.css";

function getTotal(cartData) {
  let priceArr = cartData.map((item) => {
    let x = item.p1.trim("").split(" ").length;
    return item.p1.trim("").split(" ")[x - 1];
  });

  let ans = 0;
  for (let i = 0; i < priceArr.length; i++) {
    ans = ans + Number(priceArr[i]);
  }
  return ans.toFixed(2);
}

function Cart() {
  const [total, setTotal] = useState(0);

  const { cartData } = useContext(CartContext);
  useEffect(() => {
    setTotal(getTotal(cartData));
  }, []);

  return (
    <div className={style.cartPage}>
      <div>
        {cartData.map((item) => {
          return <CartCard key={item.id} {...item} />;
        })}
      </div>
      {cartData.length > 0 ? (
        <div className={style.totalPage}>
          <h1>Total item: {cartData.length}</h1>
          <hr />
          <h1>Your Total: {total}</h1>
          <Button>Checkout</Button>
        </div>
      ) : (
        <div style={{ fontSize: "20px" }}>
          <img
            src="https://www.apnashopping.in/assets/img/payment/xEmpty-Cart.jpg.pagespeed.ic.Oe_ZNApeqS.webp"
            alt="https://www.apnashopping.in/assets/img/payment/xEmpty-Cart.jpg.pagespeed.ic.Oe_ZNApeqS.webp"
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
