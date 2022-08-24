import React from "react";
import footer from "./Footer.module.css";

function Bottom() {
  return (
    <div className={footer.bottom} >
      <p style={{display:"flex"}} >Ship to: <img src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" alt="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" /> </p>
      <p>© Copyright 2022, Overstock.com®, Inc.</p>
      <p> 799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446 </p>
    </div>
  );
}

export default Bottom;
