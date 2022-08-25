import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function TrandingSearches() {
  return (
    <div>
      <Heading textAlign={"center"} margin="50px">
      Trending Searches
      </Heading>
      

     
      <SimpleGrid color={"#a10a9a9"}  textAlign={"center"} fontSize="20px" fontWeight={"bold"} columns={[2, 3]} spacing={10}>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Outdoor Rugs
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Wallpaper
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Patio Furniture
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Mattresses
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Tv Stands
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Outdoor Liging
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Outdoor Dining Sets
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Mirrors
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Potable Air Conditoners
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Bathroom Vanities
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Computer Desks
        </Box> </Link>
        <Link to={"/productpage"} ><Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Area Rugs
        </Box> </Link>
      </SimpleGrid>
    </div>
  );
}

export default TrandingSearches;
