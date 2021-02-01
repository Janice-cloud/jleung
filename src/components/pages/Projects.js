import React from "react";
import CardProject from "../../components/ProjectCards/CardProject";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import Data from "../../utils/DATA.json";

function Projects() {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Projects </h1>

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
    </div>
  );
}

export default Projects;
