import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import style from "./Popular.module.css"

function Popular() {
  return (
    <div className={style.popular} >
      <p>Popular Furniture Categories</p>

      <SimpleGrid  columns={[2,2,3,4]} spacing={10}>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_1.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Patio Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_2.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Living Room Funiture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_3.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Dining Room Funiture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_4.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Bedroom Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_10.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Mattresses</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_6.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Home Office Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_6_SmallSpaceFurniture.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Small Space Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_7_KitchenFurniture.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Kitchen Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_9.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Entryway Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_10.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Bathroom Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_11.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Recreation Room Furniture</p>
        </Box>
        <Box>
          <img
            src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_12.jpg?imwidth=400&impolicy=medium"
            alt=""
          />
          <p>Kids & Toddler Room Furniture</p>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Popular;
