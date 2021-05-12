import React, { Component } from "react";
import * as foodService from "../../../service/foodService";
import UserContext from "../../../context/UserContext";
import FoodCard from "../FoodCard/FoodCard";
import { Row } from "reactstrap";

class PublicFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFoods: [],
    };
  }

  componentDidMount() {
    foodService.getAll().then((res) => this.setState({ allFoods: res }));
  }

  render() {
    return (
        <Row className="m-0 text-center">
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
