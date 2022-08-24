import React from "react";
import footer from "./Footer.module.css";

function Upper() {
  return (
    <div className={footer.upper}>
      <div>
        <p>
          <b>MY ACCOUNT</b>
        </p>
        <p>Orders & Returns</p>
        <p>Email Preferences</p>
        <p>Account Settings</p>
      </div>
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
      <div>
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
      <div>
        <p>
          <b>MORE WAYS TO SHOP </b>
        </p>
        <p> Tips & Ideas </p>
        <p> Deals </p>
        <p> Clearance </p>
        <p> New Arrivals </p>
      </div>
    </div>
  );
}

export default Upper;
