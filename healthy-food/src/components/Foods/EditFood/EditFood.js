import {useEffect,useState,useContext} from "react";
import * as foodService from "../../../service/foodService";
import UserContext from "../../../context/UserContext";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const EditFood = ({match,history}) => {

    const [editFood,setEditFood]=useState({})
    const context=useContext(UserContext);

    const onChange = (e) => setEditFood({ ...editFood, [e.target.name]: e.target.value });

    useEffect(() => {
        foodService.getDetails(match.params.id)
        .then(res=>setEditFood(res))
        .then(console.log(editFood))
    },[]);

    const onSubmitEditForm=(e)=>{
        e.preventDefault();
        Object.assign(editFood, { userId: context.id })
        foodService.updateFood(editFood,match.params.id)
        .then(()=>{history.push(`/details/${match.params.id}`); return;})
        console.log(editFood);
    }

  return (
    <div>
      <Form onSubmit={onSubmitEditForm}>
        <FormGroup>
          <Label for="nameFood">Name</Label>
          <Input
            type="text"
            name="nameFood"
            id="name"
            placeholder="Enter Name of the Food"
            value={editFood.nameFood}
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
            value={editFood.calories}
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
            value={editFood.description}
            onChange={onChange}
          />
        </FormGroup>

        <FormGroup>
          <Input type="select" name="category" value={editFood.category} onChange={onChange} >
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
            value={editFood.img}
            onChange={onChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default EditFood;
