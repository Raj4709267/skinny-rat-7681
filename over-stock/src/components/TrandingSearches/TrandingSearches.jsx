import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function TrandingSearches() {
  return (
    <div>
      <Heading textAlign={"center"} margin="50px">
        Overstock Featured Brands
      </Heading>
      <SimpleGrid color={"#a10a9a9"}  textAlign={"center"} fontSize="20px" fontWeight={"bold"} columns={[2, 3]} spacing={10}>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Outdoor Rugs
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Wallpaper
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Patio Furniture
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Mattresses
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Tv Stands
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Outdoor Liging
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Outdoor Dining Sets
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Mirrors
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Potable Air Conditoners
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Bathroom Vanities
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Computer Desks
        </Box>
        <Box  display={"flex"} alignItems="center"  justifyContent={"center"}  bg="#f5f6f7" height="70px">
          Area Rugs
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default TrandingSearches;
