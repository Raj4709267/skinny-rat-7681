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
import navbarCss from "../Navbar/Navbar.module.css";

export default function Hamburger({ isOpen, onClose, setOpen }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
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
              <div>
                <p> Furnitue</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Rugs</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Decor</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Bedding</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Home improvement</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Kitchen</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Outdoor</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Lighting</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Kids & Baby</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> More Categories</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Ideas</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Sales & Deals</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> My Account</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> My Lists</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Contact Us</p>
                <ChevronRightIcon/>
              </div>
              <div>
                <p> Club O</p>
                <ChevronRightIcon/>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
