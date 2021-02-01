import React from "react";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import ContactForm from "../ContactForm/ContactForm";
import Rows from "../Rows/Rows"

function Contact() {
  return (
    <div>
      <Jumbotron>
      <Container>
        <Rows></Rows>
        <h1>Contact Page</h1>
        <div className="row top-border"></div>
        <ContactForm></ContactForm>
  
      </Container>
      </Jumbotron>
    </div>
  );
}

export default Contact;
