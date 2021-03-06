import React, { useEffect, useState, useContext } from "react";
import * as foodService from "../../../service/foodService";
import FoodCard from "../FoodCard/FoodCard";
import UserContext from "../../../context/UserContext";
import { Row } from "reactstrap";

const MyFood = () => {
  const [myFood, setMyFood] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    foodService.getAll()
    .then((res) => setMyFood(res));
  }, [myFood]);

  return (
    <Row className="m-0">
      {myFood.length === 0 ? 
        <p>Loading...</p>
       : 
        myFood
          ?.sort()
          .reverse()
          .map((x) =>
            x.userId === context.id ? 
              <FoodCard    
                key={x.key}
                nameFood={x.nameFood}
                calories={x.calories}
                description={x.description}
                img={x.img}
                id={x.key}
                category={x.category}
            /> : "")}
    </Row>
  );
};

export default MyFood;
