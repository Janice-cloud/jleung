import React from "react";
import "../Jumbotron/style.css";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
