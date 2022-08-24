import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import React from "react";

function Listing({ data,heading }) {
  return (
    <>
      <Heading textAlign={"center"} margin={"50px"} >
    {heading}
      </Heading>
      <SimpleGrid
        marginTop={"50px"}
        textAlign={"center"}
        columns={[3, 3, 6]}
        spacing={10}
      >
        {data.map((item) => {
          return (
            <Box>
              <img src={item.img} alt={item.img} />
              <p>{item.name}</p>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default Listing;
