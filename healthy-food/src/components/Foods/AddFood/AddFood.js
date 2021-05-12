import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as foodService from "../../../service/foodService";
import { useForm } from "react-hook-form";


const AddFood = () => {
  const context = useContext(UserContext);

  const [food, setFood] = useState({
    nameFood: "",
    calories: "",
    description: "",
    category: "",
    img: "",
    ingridients: "",
  });

  const onChange = (e) => setFood({ ...food, [e.target.name]: e.target.value });

  const onSubmitAddForm = (e) => {
    e.preventDefault();
    Object.assign(food, { userId: context.id });
    foodService.createFood(food);
    console.log(food);
  };

  return (
    <div>
      <Form onSubmit={onSubmitAddForm}>
        <FormGroup>
          <Label for="nameFood">Name</Label>
          <Input
            type="text"
            name="nameFood"
            id="name"
            placeholder="Enter Name of the Food"
            onChange={onChange}
          />
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
        </FormGroup>
        <FormGroup>
          <Input
            type="select"
            name="category"
            onChange={onChange}
          >
            <option>Select Category</option>
            <option value="meat">Meat</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
          </Input>
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
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            type="textarea"
            onChange={onChange}
            name="ingridients"
            id=" ingridients"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default AddFood;
