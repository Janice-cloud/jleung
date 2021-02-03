import React from "react";
import Jumbotron from "../Jumbotron/index";
import Container from "../Container/container";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/header";

function Contact() {
  return (
    <Container>
      <Header>
        <h1 className="display-3 font-weight-bold text-Dark" >CONTACT</h1>
      </Header>
      <Jumbotron>
        <div className="row top-border"></div>
        <ContactForm></ContactForm>
      </Jumbotron>
    </Container>
  );
}

export default Contact;
