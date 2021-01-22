import React from "react";
import "../Jumbotron/style.css";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{
        textAlign: "center"
      }}
      className="jumbotron border"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
