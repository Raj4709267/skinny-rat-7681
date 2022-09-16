import { Button } from "@chakra-ui/react";
import React from "react";

function CartCard(props) {
  console.log(props);
  return (
    <div style={{
        display:"flex",
        gap:"30px",
        border:"1px solid #787677",
        marginBottom: "20px",
        borderRadius:"10px",
        padding:"20px"
    }} >
      <div>
        <img width={"200px"} src={props.img} alt={props.img} />
      </div>
      <div>
        <p>{props.p2}</p>
        <p></p>
        <Button marginTop={"20px"} >Check Out</Button>
      </div>
    </div>
  );
}

export default CartCard;
