import React from "react";
import { Link as RRNavLink } from "react-router-dom";
import { Col, NavLink, Badge, Button, Row } from "reactstrap";
import style from "./FoodCard.module.css";
import Filter from "../../Filter/Filter";
// import * as foodService from "../../../service/foodService";

const FoodCard=({nameFood,category,id,img,calories,})=> {
 
    return (
      <Col xs="3" className="mb-5 text-center">
        <h5>
          Food:{" "}
          <Badge color="secondary bg-secondary">{nameFood}</Badge>
        </h5>
        <h6>
          Category:{" "}
          <Badge color="secondary bg-secondary">{category}</Badge>
        </h6>
        <img
          className={style.borderItem}
          width="100%"
          src={img}
          alt=""
        />
        <h6>
          Calories:{" "}
          <Badge color="secondary bg-secondary">
            {calories} kcal
          </Badge>
        </h6>
        <NavLink tag={RRNavLink} to={"/details/" + id}>
          Read More
        </NavLink>
        <Row>
          <Col xs="12">
            <Button className="bg-primary">Add to Favourite</Button>
          </Col>
        </Row>
      </Col>
    );

}

export default FoodCard;
