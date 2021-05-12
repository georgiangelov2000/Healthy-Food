import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { auth } from "../../../utils/firebase";

const Register = ({ history }) => {
  const onSubmitForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        console.log("register");
        history.push("/login");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        if ((errorCode = "auth/weak-password")) {
          alert("this password is to weak");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <Container className="mb-5">
      <Form onSubmit={onSubmitForm}>
        <h1>Register Form</h1>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
