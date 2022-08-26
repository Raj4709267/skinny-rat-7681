import React from "react";
import style from "./Product.module.css"
import { ChevronDownIcon } from "@chakra-ui/icons";


function Options() {
  return (
    <div className={style.options} >
      <div>Type <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Price  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Colors  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Uphostery aterials  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Styles  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Arm Styles  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Back Styles  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Brands  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Prints  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Prints  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Assembly  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Sals & Promotions  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Product Features  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Customer Rating  <ChevronDownIcon boxSize={"2em"} /> </div>
      <div>Availability  <ChevronDownIcon boxSize={"2em"} /> </div>
    </div>
  );
}

export default Options;
