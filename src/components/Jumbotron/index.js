import React from "react";
import "../Jumbotron/style.css";

function Jumbotron () {
  return (
    <div
      style={{
        textAlign: "center"
      }}
      className="jumbotron"
    >
             <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
          <p className="lead text-Dark font-weight-bold">
            Bringing ideas to life!
          </p>
    </div>
  );
};

export default Jumbotron;
