import React from "react";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import "../Jumbotron/style.css";
import Header from "../Header/header";

function Home() {
  return (
    <div>
      <Container>
        <Header>
          <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
        </Header>
        <Jumbotron>
          <p className="lead text-Dark font-weight-bold">
            Bringing ideas to life!
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
