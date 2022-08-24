import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// className={style.limitedDeals}
function LimitedDeals() {
  return (
    <div>
      <Heading textAlign={"center"} margin={"40px"} as="h2">
        limited-time deals
      </Heading>

      <SimpleGrid marginBottom={"50px"} textAlign={"center"} columns={[3,3, 6]} spacing={10}>
        <Box bg={"rgb(242, 247, 255)"}>
          <Link to={"/rugs"}>
            <div>
              {" "}
              <img
                src="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_1.svg?imwidth=1920"
                alt="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_1.svg?imwidth=1920"
              />
              <p>select rugs</p>
            </div>
          </Link>
        </Box>
        <Box bg={"rgb(242, 247, 255)"}>
          <Link to={"/outdoor"}>
            <div>
              {" "}
              <img
                src="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_2.svg?imwidth=1920"
                alt="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_2.svg?imwidth=1920"
              />
              <p>select outdoor</p>
            </div>
          </Link>
        </Box>
        <Box bg={"rgb(242, 247, 255)"}>
          <Link to={"/furniture"}>
            <div>
              {" "}
              <img
                src="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_3.svg?imwidth=1920"
                alt="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_3.svg?imwidth=1920"
              />
              <p>select furniture</p>
            </div>
          </Link>
        </Box>
        <Box bg={"rgb(242, 247, 255)"}>
          <Link to={"/decor"}>
            <div>
              {" "}
              <img
                src="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_4.svg?imwidth=1920"
                alt="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_4.svg?imwidth=1920"
              />
              <p>select home decor</p>
            </div>
          </Link>
        </Box>
        <Box bg={"rgb(242, 247, 255)"}>
          <Link to={"/bedding"}>
            <div>
              {" "}
              <img
                src="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_5.svg?imwidth=1920"
                alt="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_5.svg?imwidth=1920"
              />
              <p>select bedding</p>
            </div>
          </Link>
        </Box>
        <Box bg={"rgb(242, 247, 255)"}>
          <Link to={"/lighting"}>
            <div>
              {" "}
              <img
                src="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_6.svg?imwidth=1920"
                alt="https://ak1.ostkcdn.com/img/mxc/08222022_HB_INTL_6.svg?imwidth=1920"
              />
              <p>select lighting</p>
            </div>
          </Link>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default LimitedDeals;
