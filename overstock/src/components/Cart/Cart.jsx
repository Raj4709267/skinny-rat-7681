import { Button } from "@chakra-ui/react";
import style from "./Cart.module.css"

function CartCard(props) {
  let arr=props.p1.trim("").split(" ")
  // console.log(arr)
  return (
    <div className={style.cart}>
      <div>
        <img width={"200px"} src={props.img} alt={props.img} />
      </div>
      <div>
        <p>{props.p2}</p>
        <br />
        <p>Price - <b>{+(arr[arr.length-1])}</b></p>
        {/* <p>Quntity <button>-</button>{qun}<button>+</button></p> */}
      </div>
    </div>
  );
}

export default CartCard;
