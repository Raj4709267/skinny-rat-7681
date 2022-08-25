import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Top.module.css";

function Categories({ topData }) {
  return (
    <div>
      <Heading fontSize={"25px"} margin="10px" marginLeft={"0"} marginBottom={"20px"}>
        Featured Categories
      </Heading>

      {topData.map((item) => {
        return (
          <Link to={"/productpage"} >
            {" "}
            <div className={style.categories}>{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
