import React, { Component } from "react";
import { Link as RRNavLink } from "react-router-dom";
import { Col, NavLink } from "reactstrap";
import style from "./FoodCard.module.css";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col xs="3" className="mb-5 text-center">
        <h5>Food: {this.props.nameFood}</h5>
        <p>Category: {this.props.category}</p>
        <img className={style.borderItem} width="100%" src={this.props.img} alt="" />
          <p className="bg-secondary pt-2 pb-2 text-white mt-2">Calories: {this.props.calories}</p>
        <NavLink tag={RRNavLink} to={"/details/" + this.props.id}>
          Read More
        </NavLink>
      </Col>
    );
  }
}

export default FoodCard;
