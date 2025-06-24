import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnlogin, setbtnLogin] = useState("Login");
  return (
    console.log("Header rendered"),
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/Body" prefetch="intent" className="nav-link"> Home</Link></li>
          <li><Link to="/About" prefetch="intent" className="nav-link"> About</Link></li>
          <li><Link to="/Contact" prefetch="intent" className="nav-link"> Contact</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnlogin === "login"
                ? setbtnLogin("logout")
                : setbtnLogin("login");
            }}
          >
           {btnlogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
