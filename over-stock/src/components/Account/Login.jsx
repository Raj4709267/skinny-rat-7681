import { Button, Checkbox, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Account.module.css";
function Login() {
  return (
    <div>
      <div className={style.signup}>
        <Heading margin={"30px 0 40px 0"} fontSize={"20px"}>
          Log in
        </Heading>
        <p className={style.p}>Email Address*</p>
        <Input
          placeholder="Email"
          type={"email"}
          focusBorderColor="blue.500"
        />
        <div>
          <p className={style.p}>Password*</p>
          <Input
            placeholder="Password"
            type={"password"}
            focusBorderColor="blue.500"
          />
        </div>

        <Link to={"/"} >
        <Button   marginTop={"20px"} colorScheme={"whatsapp"} width={"100%"}>
          Create Account
        </Button>
        </Link>
        
      </div>
    </div>
  );
}

export default Login;
