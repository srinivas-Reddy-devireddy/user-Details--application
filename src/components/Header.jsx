import React from "react";
import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <GiHamburgerMenu className="icon" />

        <h2>User Application</h2>
      </div>
      <button>LOGIN</button>
    </div>
  );
};
export default Header;
