import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"


const Login = (props) => {
  return (
    <div className="MyLg">
        <div><img  className="mb-3" src ={props.image}/></div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="name" placeholder="User Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn-block" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center text-white">belum punya aku ? silahkan <Link to="/register">Daftar</Link></p>
    </div>
  );
};

export default Login;
