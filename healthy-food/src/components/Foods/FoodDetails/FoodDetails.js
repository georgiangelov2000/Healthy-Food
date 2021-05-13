import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import * as foodService from "../../../service/foodService";
import style from "./FoodDetails.module.css";

import {
  Badge,
  Col,
  Row,
  Button,
} from "reactstrap";

const FoodDetails = ({ match, history,id,likes }) => {
  const context = useContext(UserContext);
  const [foodDetails, setFoodDetails] = useState({});
  const [favouriteFood,setFavoriteFood]=useState([])

  useEffect(() => {
    foodService.getDetails(match.params.id).then((res) => setFoodDetails(res));
  }, []);

  const onDeleteButtonClick = async () => {
    await foodService.deleteFood(match.params.id);
    history.push("/dashboard");
  };


  return (
    <div>
      <Col xs="3" className="mb-5 text-center m-auto">
        <h5> <small>Food: </small> <Badge color="secondary bg-secondary">{foodDetails.nameFood}</Badge></h5>
        <h5> <small>Category: </small> <Badge color="secondary bg-secondary">{foodDetails.category}</Badge></h5>
        <img width="100%" className="mb-2" src={foodDetails.img} alt="" />
        <h5> <span>Calories: </span>  <Badge color="secondary bg-secondary">{foodDetails.calories} kcal</Badge></h5>
        <p> <span className={style.span}>Description: </span> {foodDetails.description}</p>
        <p> <span className={style.span}>Ingridients: </span> {foodDetails.ingridients}</p>
        <Button>Add to favourite</Button>
        {context.id === foodDetails.userId ? (
          <Row className="align-items-center">
            <Col xs="2">
              <Link to={"/edit/" + match.params.id}> Edit </Link>
            </Col>
            <Col xs="2">
              <Button color="link" onClick={onDeleteButtonClick}>
                Delete
              </Button>
            </Col>
          </Row>
        ) : null}
      </Col>
    </div>
  );
};

export default FoodDetails;
