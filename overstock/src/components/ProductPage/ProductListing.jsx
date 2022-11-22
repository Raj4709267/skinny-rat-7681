import React, { useContext } from "react";
import { Box, Button, SimpleGrid, useToast } from "@chakra-ui/react";
import Options from "./Options";
import style from "./Product.module.css";
import { CartContext } from "../../Context/CartContext";

function ProductListing({ data }) {
  let { handelChange, addToCart } = useContext(CartContext);
  const toast = useToast();

  return (
    <SimpleGrid marginBottom={"60px"} marginTop="50px" columns={2} spacing={10}>
      <Box className={style.categoryHide}>
        <div className={style.optionss}>
          <Options />
        </div>
      </Box>
      <Box className={style.productMedia}>
        <SimpleGrid columns={[1, 2, 2, 3]} spacing={10}>
          {data.map((item) => {
            return (
              <Box className={style.productContainer}>
                <img src={item.img} alt={item.img} />
                <p className={style.p1}>{item.p1}</p>
                <img
                  className={style.star}
                  src="https://www.seekpng.com/png/full/411-4110082_four-half-stars-0-copy-star-rating-with.png"
                  alt="https://www.seekpng.com/png/full/411-4110082_four-half-stars-0-copy-star-rating-with.png"
                />
                <p className={style.p2}>{item.p2}</p>
                <Button
                  marginTop={"10px"}
                  colorScheme={"whatsapp"}
                  onClick={() => {
                    handelChange();
                    toast({
                      title: `Item Added`,
                      status: "success",
                      isClosable: true,
                    });
                    addToCart(item);
                  }}
                >
                  {" "}
                  Add to Cart{" "}
                </Button>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

export default ProductListing;
