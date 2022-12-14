import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import navbarCss from "../Navbar/Navbar.module.css";
import CheckOut from "./CheckOut";
import Hamburger from "./Hamburger";
import Icons, { CartIcon } from "./Icons";
import Logo from "./Logo";
import Logo2 from "./Logo2";
import NavMenu from "./NavMenu";
import Search from "./Search";
function Navbar() {
  const [isCheckout, setIsCheckout] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function setOpen(value) {
    setIsOpen(value);
  }

  return (
    <div className={navbarCss.navbar}>
      
      <div className={navbarCss.navTopContainer}>
        <div>
          {/* logo */}
          <Logo />
        </div>
        <div onClick={() => setIsOpen(true)}>
          <HamburgerIcon boxSize={"2em"} />
        </div>
        <div>
          {/* logo */}
          <Logo2 />
        </div>
        <div className={navbarCss.search}>
          {/* search */}
          <Search />
        </div>
        <div className={navbarCss.iconsMenu}>
          <Icons />
        </div>
        <div className={navbarCss.cartIcon}>
          <CartIcon />
        </div>
        {isCheckout && <CheckOut />}
      </div>
      <div>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div className={navbarCss.search2}>
      <Search />
      </div>
      <div className={navbarCss.navMenu}>
        <NavMenu />
      </div>
    </div>
  );
}

export default Navbar;
