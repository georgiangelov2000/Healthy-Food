import React, { Component } from "react";
// import UserContext from "../../../context/UserContext";
import * as foodService from "../../../service/foodService";
import FilterNav from "../../FilterNav/FilterNav";
import FoodCard from "../FoodCard/FoodCard";
import { Row } from "reactstrap";

class FoodByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      currentCategory: "all",
    };
  }

  componentDidMount() {
    foodService.getAll().then((res) => this.setState({ food: res }));
  }

  componentDidUpdate(prevProps) {
    try {
      const currCategory = this.props.match.params.category;
        console.log(prevProps.match.params.category);
      if (prevProps.match.params.category == currCategory) {
        return;
      }
      this.setState({ currentCategory: this.props.match.params.category });
      console.log(this.state.currentCategory)
      // console.log(this.state.categoryToFind);
    } catch (error) {}
  }

  render() {
    if (this.state.currentCategory === "all") {
      return (
        <Row>
          <FilterNav />
          {this.state.food.sort().reverse()
            .map((x) => (
              <FoodCard
                key={x.key}
                nameFood={x.nameFood}
                img={x.img}
                id={x.key}
                category={x.category}
                calories={x.calories}
                food={x.food}
                currentCategory={this.state.currentCategory}
              />
            ))}
        </Row>
      );
    } else {
      return (
        <Row>
          <FilterNav />
          {this.state.food.sort().reverse()
            .map((x) => x.category === this.state.currentCategory ? (
                <FoodCard
                  key={x.key}
                  nameFood={x.nameFood}
                  img={x.img}
                  id={x.key}
                  category={x.category}
                  calories={x.calories}
                  food={x.food}
                  currentCategory={this.state.currentCategory}
                />
              ) : (
                ""
                )
            )}
        </Row>
      );
    }
  }
}

// FoodByCategory.contextType = UserContext;

export default FoodByCategory;
