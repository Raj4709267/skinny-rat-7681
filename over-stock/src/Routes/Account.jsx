import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Signup from "../components/Account/Signup";
import Login from "../components/Account/Login";

function Account() {
  return (
    <SimpleGrid  width="60%" margin={"auto"} columns={[1,1,1,2]} marginBottom="50px" >
      <Box margin={"auto"} marginTop="0" width={"80%"}>
        <Signup />
      </Box>
      <Box margin={"auto"} marginTop="0" width={"80%"}>
        <Login />
      </Box>
    </SimpleGrid>
  );
}

export default Account;
