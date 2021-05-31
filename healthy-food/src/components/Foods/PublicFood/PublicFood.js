import React, { useState, useEffect } from "react";
import * as foodService from "../../../service/foodService";
import FoodCard from "../FoodCard/FoodCard";
import { Row, Col,Input } from "reactstrap";

const PublicFood = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    foodService.getAll().then((res) => {
      setAllFoods(res);
    });
  });

  const filteredFood = allFoods.filter((food) =>
    food.nameFood.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Row className="m-0 text-center">
      <Col xs="10" className="my-4 mx-auto">
        <>
          <Input
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Seach your favourite food"
            onChange={handleChange}
          />
        </>
      </Col>
      {filteredFood
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
            categoryToFind={x.categoryToFind}
          />
        ))}
    </Row>
  );
};

/*
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
              FavouriteFood={FavouriteFood}
              handleFavouritesClick={}
            />
          ))}
      </Row>
    );
  }
}
*/
export default PublicFood;
