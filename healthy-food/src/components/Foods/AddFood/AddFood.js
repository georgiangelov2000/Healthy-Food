import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import * as foodService from "../../../service/foodService";
import style from "./AddFood.module.css";

const AddFood = ({history}) => {
  const context = useContext(UserContext);

  const [food, setFood] = useState({
    nameFood: "",
    calories: "",
    description: "",
    category: "",
    img: "",
    ingridients: "",
  });
  const [error, setError] = useState([]);

  const onChange = (e) => setFood({ ...food, [e.target.name]: e.target.value });

  const onSubmitAddForm = (e) => {
    e.preventDefault();

    if(food.nameFood=="" || food.calories==""||food.description==""||food.category=="" ||food.img=="" ||food.ingridients=="" ){
      setError({ err: "Field is required!" });
    } else {
      Object.assign(food, { userId: context.id });
      foodService.createFood(food);
      history.push("/dashboard");
      //console.log(food);
    }

  };

  return (
    <Container>
      <Form onSubmit={onSubmitAddForm} className="mt-5 mb-5">
        <h1 className="text-center">Add Food</h1>
        <FormGroup>
          <Label for="nameFood">Name</Label>
          <Input
            type="text"
            name="nameFood"
            id="name"
            placeholder="Enter Name of the Food"
            onChange={onChange}
          />
          {error ? <p className={style.errorMessage}>{error.err}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="calories">Calories</Label>
          <Input
            type="text"
            name="calories"
            id="calories"
            placeholder="Calories"
            onChange={onChange}
          />
          {error ? <p className={style.errorMessage}>{error.err}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={onChange}
          />
          {error ? <p className={style.errorMessage}>{error.err}</p> : null}
        </FormGroup>
        <FormGroup>
          <Input type="select" name="category" onChange={onChange}>
            <option>Select Category</option>
            <option value="meat">Meat</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
          </Input>
          {error ? <p className={style.errorMessage}>{error.err}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="img">Image</Label>
          <Input
            type="text"
            name="img"
            id="img"
            placeholder="Upload Image"
            onChange={onChange}
          />
          {error ? <p className={style.errorMessage}>{error.err}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            type="textarea"
            onChange={onChange}
            name="ingridients"
            id=" ingridients"
          />
          {error ? <p className={style.errorMessage}>{error.err}</p> : null}
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default AddFood;
