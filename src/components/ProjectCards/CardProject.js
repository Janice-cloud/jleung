import React from "react";
import { Card, Button } from "react-bootstrap";
import "../ProjectCards/CardProject.css";

function CardProject(props) {
  return (
    <div>
      {
        <Card className="card">
          <Card.Img
            style={{ height: "250px", width: "18rem" }}
            className="image"
            variant="top"
            src={props.card_image}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{props.card_title}</Card.Title>
            <Card.Text>{props.card_text}</Card.Text>
            <Button variant="primary" href={props.link} target="_blank">
              {props.card_title}
            </Button>
          </Card.Body>
        </Card>
      }
    </div>
  );
}

export default CardProject;
