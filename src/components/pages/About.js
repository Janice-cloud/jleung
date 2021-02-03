import React from "react";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import Header from "../Header/header";

function About() {
  return (
    <Container>
      <Header>
        <h1 className="display-3 font-weight-bold text-Dark" >ABOUT</h1>
      </Header>
      <Jumbotron>
        <p>
          Completed a 6 month Full Stack coding bootcamp with the University of
          Sydney and Trilogy Education Services. I have used HTML, CSS
          JavaScript to produce websites and web apps. I have been able to apply
          concepts learnt through the bootcamp to build a fully functional MERN
          application. Through the bootcamp I have learn the skill to be able to
          research new concepts and apply them to any web application. Which has
          stimulated my thirst to continually apply my new skills within the
          industry.
        </p>
      </Jumbotron>
    </Container>
  );
}

export default About;
