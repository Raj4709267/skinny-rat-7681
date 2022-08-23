import { Search2Icon } from "@chakra-ui/icons";

import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React from "react";

function Search() {
  return (
    <InputGroup size="sm">
      <Input
        borderColor={"#b9b9b9"}
        width={"100%"}
        placeholder="Search... everything you find ships for free"
      />
      <InputRightAddon
        bg={"red"}
        children={<Search2Icon boxSize={"1.3em"} color="white" />}
      />
    </InputGroup>
  );
}

export default Search;
