import { Button, Checkbox, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import style from "./Account.module.css";
function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [error,setError]=useState(false)
  function handelSignUp(){
    console.log(email,password)
    
    // const payload={
    //   email:email,
    //   password:password
    // }
    axios.post("https://reqres.in/api/register").then(res=>{
      console.log(res)
      setError(false)
    }).catch(e=>{
      setError(true)
      console.log(e)
      setEmail("")
      setPassword("")
    })
  }

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
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <div>
          <p className={style.p}>Password*</p>
          <Input
            placeholder="Password"
            type={"password"}
            focusBorderColor="blue.500"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <Button  onClick={()=>handelSignUp()} marginTop={"20px"} colorScheme={"whatsapp"} width={"100%"}>
          Login
        </Button>
        {
          error && <p>Please enter correct Email</p>
        }
        
      </div>
    </div>
  );
}

export default Login;
