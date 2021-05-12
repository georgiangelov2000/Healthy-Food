import React, { useState } from "react";
import { auth } from "../../../utils/firebase";
import { Button, Form, FormGroup, Label, Input,Container } from "reactstrap";
import style from "./Login.module.css";


const Login = ({ history }) => {
  const [error, setError] = useState("");

  const loginSubmitForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        history.push("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container className="mb-5">
      <Form onSubmit={loginSubmitForm}>
        <h1>Login Form</h1>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <p className={style.errorMessage}>{error !==""?<div>{error}</div>:null}</p>
      </Container>
  );
};

export default Login;
