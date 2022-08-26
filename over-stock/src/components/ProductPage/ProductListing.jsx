import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Options from "./Options";
import { Link } from "react-router-dom";
import style from "./Product.module.css"

function ProductListing({ data }) {
  return (
    <SimpleGrid marginBottom={"60px"}  marginTop="50px" columns={2} spacing={10}>
      <Box className={style.categoryHide} >
        <div className={style.optionss} >
          <Options />
        </div>
      </Box>
      <Box className={style.productMedia}  >
        <SimpleGrid columns={[1,2,2,3]} spacing={10}>
          {data.map((item) => {
            return (
              <Link to={"/"} >
                <Box className={style.productContainer} >
                  <img src={item.img} alt={item.img} />
                  <p className={style.p1} >{item.p1}</p>
                  <img className={style.star} src="https://www.seekpng.com/png/full/411-4110082_four-half-stars-0-copy-star-rating-with.png" alt="https://www.seekpng.com/png/full/411-4110082_four-half-stars-0-copy-star-rating-with.png" />
                  <p className={style.p2}>{item.p2}</p>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

export default ProductListing;
