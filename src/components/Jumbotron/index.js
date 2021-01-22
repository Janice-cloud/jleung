import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{
        textAlign: "center"
      }}
      className="jumbotron border border-success image"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
