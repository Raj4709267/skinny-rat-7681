import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Listing({ data, heading }) {
  return (
    <>
      <Heading textAlign={"center"} margin={"50px"}>
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
            <Link to={"/productpage"}>
              <Box>
                <img src={item.img} alt={item.img} />
                <p>{item.name}</p>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default Listing;
