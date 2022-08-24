import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import navbarCss from "../Navbar/Navbar.module.css";

export default function Hamburger({ isOpen, setOpen }) {
  const btnRef = React.useRef();

  function onClose() {
    setOpen(false);
  }

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader bgColor={"Red"} color="white">
            Categories
          </DrawerHeader>

          <DrawerBody padding="0">
            <div className={navbarCss.Hamburger}>
              <Link to={"/furniture"}>
                <div onClick={()=>onClose()} >
                  <p> Furniture</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/rugs"}>
                <div onClick={()=>onClose()}  >
                  <p> Rugs</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/decor"} >
                <div onClick={()=>onClose()}  >
                  <p> Decor</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/bedding"} >
                {" "}
                <div onClick={()=>onClose()}  >
                  <p> Bedding</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/homeimprovement"} >
                <div onClick={()=>onClose()}  >
                  <p> Home improvement</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/kitchen"} >
                <div onClick={()=>onClose()}  >
                  <p> Kitchen</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/outdoor"} >
                <div onClick={()=>onClose()}  >
                  <p> Outdoor</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/lighting"} >
                <div onClick={()=>onClose()}  >
                  <p> Lighting</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/kids"} >
                <div onClick={()=>onClose()}  >
                  <p> Kids & Baby</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/more"} >
                <div onClick={()=>onClose()}  >
                  <p> More Categories</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/ideas"} >
                <div onClick={()=>onClose()}  >
                  <p> Ideas</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/sales"} >
                <div onClick={()=>onClose()}  >
                  <p> Sales & Deals</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/account"} >
                {" "}
                <div onClick={()=>onClose()}  >
                  <p> My Account</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/list"} >
                <div onClick={()=>onClose()}  >
                  <p> My Lists</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"} >
                <div onClick={()=>onClose()}  >
                  <p> Contact Us</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"} >
                <div onClick={()=>onClose()}  >
                  <p> Club O</p>
                  <ChevronRightIcon />
                </div>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
