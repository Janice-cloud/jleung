import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "../Jumbotron/index";
import "../Jumbotron/style.css";

function Home() {
  return (
    <div>
        
        <Jumbotron>
          <Container>
          <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
          <p className="lead text-Dark font-weight-bold">
            Bringing ideas to life!
          </p>
          </Container>
        </Jumbotron>
     
    </div>
  );
}

export default Home;
