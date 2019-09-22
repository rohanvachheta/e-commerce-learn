import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/download.svg";
import "./header.component.scss";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
