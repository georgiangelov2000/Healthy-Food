import React, { Component } from "react";
import { Link as RRNavLink } from "react-router-dom";
import { Col, NavLink,Badge,Button,Row } from "reactstrap";
import style from "./FoodCard.module.css";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col xs="3" className="mb-5 text-center">
        <h5>Food: <Badge color="secondary bg-secondary">{this.props.nameFood}</Badge></h5>
        <h6>Category: <Badge color="secondary bg-secondary">{this.props.category}</Badge></h6>
        <img className={style.borderItem} width="100%" src={this.props.img} alt="" />
          <h6>Calories: <Badge color="secondary bg-secondary">{this.props.calories} kcal</Badge></h6>
        <NavLink tag={RRNavLink} to={"/details/" + this.props.id}>
          Read More
        </NavLink>
        <Row>
          <Col xs="12 mb-2">
        <Button className="bg-warning">Likes</Button>
        </Col>
        <Col xs="12">
        <Button className="bg-primary">Add to Favourite</Button>
        </Col>
        </Row>
      </Col>
    );
  }
}

export default FoodCard;
