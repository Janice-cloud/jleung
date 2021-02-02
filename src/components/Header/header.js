import React from "react";
import "../Header/header.css";

const Header = ({ children }) => {
  return <div className="header">{children}</div>;
};

export default Header;