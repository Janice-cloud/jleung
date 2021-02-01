import React from "react";
import "../Container/container.css";

const Container = ({ children }) => {
  return <div className="innerContainer">{children}</div>;
};

export default Container;
