import { Button } from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";

function CheckOut() {
  return (
    <div className={style.checkoutBtn} >
      <Button bg={"black"} color="white" >Check Out</Button>
    </div>
  );
}

export default CheckOut;
