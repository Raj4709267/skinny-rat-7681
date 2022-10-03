import { Button } from "@chakra-ui/react";

function CartCard(props) {
  let arr=props.p1.trim("").split(" ")
  return (
    <div style={{
        display:"flex",
        gap:"30px",
        border:"1px solid #787677",
        marginBottom: "20px",
        borderRadius:"10px",
        padding:"20px",
        width:"50%"
    }} >
      <div>
        <img width={"200px"} src={props.img} alt={props.img} />
      </div>
      <div>
        <p>{props.p2}</p>
        <br />
        <p>Price - <b>{+(arr[arr.length-1])}</b></p>
        {/* <p>Quntity <button>-</button>{qun}<button>+</button></p> */}
        <Button marginTop={"20px"} >Check Out</Button>
      </div>
    </div>
  );
}

export default CartCard;
