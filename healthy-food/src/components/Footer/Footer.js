import React from "react";
import { Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Row className="m-0 text-center">
        <Col className="bg-secondary text-white pt-3 pb-3">
          <h1>About us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ListGroup flush>
            <ListGroupItem tag="a" href="#">
              Services
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
             Dilivery
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Contacts
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Most Popular Food
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Select your by category
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
