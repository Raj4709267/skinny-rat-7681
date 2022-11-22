import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import footer from "./Footer.module.css";
import style from "./Footer.module.css"

function Upper() {
  return (
    <SimpleGrid className={footer.upper} columns={[2,2,4,4]} spacing={5}>
      
      <Box>
        <div>
          <p>
            <b>MY ACCOUNT</b>
          </p>
          <p>Orders & Returns</p>
          <p>Email Preferences</p>
          <p>Account Settings</p>
        </div>
      </Box>
      <Box>
      <div>
        <p>
          <b>LET US HELP</b>
        </p>
        <p>Contact Customer</p>
        <p>Shipping Informmation</p>
        <p>Return Policy</p>
        <p>Internationl Help</p>
        <p>Accessibility</p>
      </div>
      </Box>
      <Box>
      <div className={style.hide2} >
        <p>
          <b> COMPANY INFORMATION </b>
        </p>
        <p> About Overstock™ </p>
        <p> Contact Us </p>
        <p> Careers </p>
        <p> Investor Relations </p>
        <p> Sell Your Products </p>
        <p> Supply Chain Transparency </p>
      </div>
      </Box>
      <Box>
      <div className={style.hide} >
        <p>
          <b>MORE WAYS TO SHOP </b>
        </p>
        <p> Tips & Ideas </p>
        <p> Deals </p>
        <p> Clearance </p>
        <p> New Arrivals </p>
      </div>
      </Box>
    </SimpleGrid>
  );
}

export default Upper;
