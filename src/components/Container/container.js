import React from "react";
import "../Container/container.css";

const Container = ({ children }) => {
  return (
    <div className="background">
      <div className="innerContainer">{children}</div>
    </div>
  );
};

export default Container;
