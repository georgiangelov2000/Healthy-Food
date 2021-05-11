import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import * as foodService from "../../../service/foodService";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button
} from "reactstrap";

const FoodDetails = ({ match, history }) => {
  const context = useContext(UserContext);
  const [foodDetails, setFoodDetails] = useState({});

  useEffect(() => {
    foodService.getDetails(match.params.id).then((res) => setFoodDetails(res));
  }, []);

  const onDeleteButtonClick =async ()=>{
    await foodService.deleteFood(match.params.id);
    history.push("/dashboard")
  }

  return (
    <div>
      <Col className="m-auto" xs="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{foodDetails.nameFood}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Category: {foodDetails.category}
            </CardSubtitle>
          </CardBody>
          <img width="100%" src={foodDetails.img} alt="" />
          <CardBody>
              <CardText>{foodDetails.description}</CardText>
            <CardText>Calories: {foodDetails.calories}</CardText>
            <CardText>Ingredients: {foodDetails.ingridients}</CardText>
            {context.id === foodDetails.userId ? 
            <Row className="align-items-center">
            <Col xs="2">
             <Link to={"/edit/"+match.params.id}> Edit </Link>
             </Col>
             <Col xs="2">
             <Button  color="link" onClick={onDeleteButtonClick}>Delete</Button>
             </Col>
             </Row>
             :null}
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default FoodDetails;
