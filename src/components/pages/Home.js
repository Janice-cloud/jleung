import React from "react";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import "../Jumbotron/style.css";

function Home() {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
          <p className="lead text-Dark font-weight-bold">
            Bringing ideas to life!
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
