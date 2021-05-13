import React, { Component } from "react";
import * as foodService from "../../../service/foodService";
import FoodCard from "../FoodCard/FoodCard";
import { Row, Col } from "reactstrap";
import Filter from "../../Filter/Filter";

class PublicFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFoods: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    foodService.getAll()
    .then((res) => this.setState({ allFoods: res }));
  }

  render() {
    return (
      <Row className="m-0 text-center">
        <Col xs="10" className="my-4 mx-auto">
          <Filter />
        </Col>
        {this.state.allFoods
          .sort()
          .reverse()
          .map((x) => (
            <FoodCard
              key={x.key}
              nameFood={x.nameFood}
              img={x.img}
              id={x.key}
              category={x.category}
              calories={x.calories}
              categoryToFind={this.state.categoryToFind}
            />
          ))}
      </Row>
    );
  }
}

export default PublicFood;
