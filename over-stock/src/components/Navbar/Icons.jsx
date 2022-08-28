import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import navbarCss from "../Navbar/Navbar.module.css";
export default function Icons() {
  let { cart } = useContext(CartContext);
  return (
    <>
      <div style={{ color: "#c92834" }}>
        <Link to={"/"}>
          <div>
            <svg
              class="UserDropDowns_dealsIcon_78"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke="#c92834"
              fill="#c92834"
            >
              <title>Tag</title>
              <path
                d="M13 22l9-9L10 1H1v9l12 12z"
                stroke="inherit"
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 9a2 2 0 100-4 2 2 0 000 4z"
                stroke="inherit"
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            <p>Deals</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={"/account"}>
          <div>
            <svg
              class="UserDropDowns_icon_06"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke="#2F3337"
              fill="#2F3337"
            >
              <title>User</title>
              <path
                d="M1 23c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10M12 13a6 6 0 100-12 6 6 0 000 12z"
                stroke="inherit"
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p>Accounts</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={"/lists"}>
          <div>
            <svg
              class="UserDropDowns_icon_06"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke="#2F3337"
              fill="#2F3337"
            >
              <title>Heart</title>
              <path
                d="M21.241 3.757A6 6 0 0012 4.684a6 6 0 10-9.242 7.558l9.241 9.243 9.243-9.243a6 6 0 000-8.485z"
                fill="none"
                stroke="inherit"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p>Lists</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={"/cart"}>
          <div>
            <svg
              class="UserDropDowns_icon_06"
              width="22"
              height="21"
              viewBox="0 0 24 24"
              stroke="#2F3337"
              fill="#2F3337"
            >
              <title>Cart Empty</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.174 14.4L5.208.833C5.14.356 4.697 0 4.174 0h-3.13C.466 0 0 .43 0 .96s.467.96 1.043.96H3.26l1.966 13.567c.07.477.512.833 1.035.833h14.608c.498 0 .926-.323 1.024-.772l2.087-9.6c.113-.52-.254-1.025-.819-1.13-.565-.103-1.115.234-1.228.754L20.014 14.4H7.174zm.13 9.6a2.087 2.087 0 100-4.174 2.087 2.087 0 000 4.174zm14.61-2.087a2.087 2.087 0 11-4.175 0 2.087 2.087 0 014.174 0z"
                stroke="none"
                fill="inherit"
              ></path>
            </svg>
            <p className={navbarCss.cartQuntity}>{cart}</p>
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </>
  );
}

function CartIcon() {
  let { cart } = useContext(CartContext);

  return (
    <div>
      <Link to={"/cart"}>
        <div>
          <svg
            class="UserDropDowns_icon_06"
            width="22"
            height="21"
            viewBox="0 0 24 24"
            stroke="#2F3337"
            fill="#2F3337"
          >
            <title>Cart Empty</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.174 14.4L5.208.833C5.14.356 4.697 0 4.174 0h-3.13C.466 0 0 .43 0 .96s.467.96 1.043.96H3.26l1.966 13.567c.07.477.512.833 1.035.833h14.608c.498 0 .926-.323 1.024-.772l2.087-9.6c.113-.52-.254-1.025-.819-1.13-.565-.103-1.115.234-1.228.754L20.014 14.4H7.174zm.13 9.6a2.087 2.087 0 100-4.174 2.087 2.087 0 000 4.174zm14.61-2.087a2.087 2.087 0 11-4.175 0 2.087 2.087 0 014.174 0z"
              stroke="none"
              fill="inherit"
            ></path>
          </svg>
          <p className={navbarCss.cartQuntity}>{cart}</p>
          <p>Cart</p>
        </div>
      </Link>
    </div>
  );
}

export { CartIcon };
