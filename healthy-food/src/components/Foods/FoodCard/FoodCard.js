import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row,Col,Container} from "reactstrap";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Col xs="2">
        <h5>Food: {this.props.nameFood}</h5>
        <p>{this.props.category}</p>
        <img width="100%" src={this.props.img} alt="" />
        <p>Calories: {this.props.calories}</p>
        <Link to={"/details/" + this.props.id}>Details</Link>
        </Col>
    );
  }
}

export default FoodCard;
