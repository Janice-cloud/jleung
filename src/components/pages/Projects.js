import React from "react";
import CardProject from "../../components/ProjectCards/CardProject";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import Data from "../../utils/DATA.json";
import Header from "../Header/header";

function Projects() {
  return (
    <Container>
      <Header>
        <h1 className="display-3 font-weight-bold text-Dark" >WORK</h1>
      </Header>
      <Jumbotron>
        {Data.map((item) => (
          <CardProject
            key={item.id}
            card_image={item.card_image}
            card_title={item.card_title}
            card_text={item.card_text}
            link={item.link}
          ></CardProject>
        ))}
      </Jumbotron>
    </Container>
  );
}

export default Projects;
