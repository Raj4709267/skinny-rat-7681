import { Button, Checkbox, Heading, Input } from "@chakra-ui/react";
import React from "react";
import style from "./Account.module.css";

function Signup() {
  return (
    <div className={style.signup}>
      <Heading margin={"30px 0 40px 0"} fontSize={"20px"}>
        Create Account
      </Heading>
      <p className={style.p}>Email Address*</p>
      <Input
        placeholder="Email"
        type={"email"}
        focusBorderColor="blue.500"
      />
      <div className={style.password}>
        <div>
          <p className={style.p}>Create Password*</p>
          <Input
            placeholder="Password"
            type={"password"}
            focusBorderColor="blue.500"
          />
        </div>
        <div>
          <p className={style.p}>Confirm Password*</p>
          <Input
            placeholder="Password"
            type={"password"}
            focusBorderColor="blue.500"
          />
        </div>
      </div>
      <div className={style.checkbox}>
        <p>
          <Checkbox defaultChecked></Checkbox> Sign up today for exclusive
          offers from Overstock.com delivered right to your inbox**
        </p>
      </div>
      <Button colorScheme={"facebook"} width={"100%"}>
        Create Account
      </Button>
      <div className={style.terms}>
        <p>
          By creating an account or continuing as a Guest, you agree to our
          <b>
            <u>Terms & Conditions</u>
          </b>
          and
          <b>
            <u> Privacy Policy.</u>
          </b>
        </p>
      </div>
      <div className={style.terms}>
        <p>
          <b>
            <u> Terms & Conditions</u>
          </b>
          |
          <b>
            <u>Privacy Policy. </u>
          </b>
          **You can unsubscribe at any time
        </p>
      </div>
    </div>
  );
}

export default Signup;
