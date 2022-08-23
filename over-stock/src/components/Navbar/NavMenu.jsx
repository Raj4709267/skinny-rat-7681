import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div>
        <Link  to={"/furniture"} > Furniture</Link>
      </div>
      <div>
        <Link  to={"/rugs"} > Rugs</Link>
      </div>
      <div>
        <Link  to={"/decor"} > Decor</Link>
      </div>
      <div>
        <Link  to={"/bedding"} > Bedding</Link>
      </div>
      <div>
        <Link  to={"/homeimprovement"} > Home improvement</Link>
      </div>
      <div>
        <Link  to={"/kitchen"} > Kitchen</Link>
      </div>
      <div>
        <Link  to={"/outdoor"} > Outdoor</Link>
      </div>
      <div>
        <Link  to={"/lighting"} > Lighting</Link>
      </div>
      <div>
        <Link  to={"/kids"} > Kids & Baby</Link>
      </div>
      <div>
        <Link  to={"/more"} > More</Link>
      </div>
      <div>
        <Link  to={"/ideas"} > Ideas</Link>
      </div>
      <div>
        <Link  to={"/sales"} > Sales & Deals</Link>
      </div>
      
    </div>
  );
}

export default Menu;
