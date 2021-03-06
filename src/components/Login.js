import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import { authenticate } from "../services/login";
import { ShopContext } from "../contexts/shop";
import { reducerTypes } from "../constants";

export const Login = () => {
  const dispatch = React.useContext(ShopContext);

  const userEl = useRef(null);
  const passwordEl = useRef(null);
  const submitEl = useRef(null);

  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      submitEl.current.setAttribute("disabled", true);
      const response = await authenticate(
        userEl.current.value,
        passwordEl.current.value
      );
      setError(false);
      dispatch({
        type: reducerTypes.SET_TOKEN,
        payload: response.data.token,
      });
    } catch (err) {
      console.log(err);
      submitEl.current.removeAttribute("disabled");
      setError(true);
    }
  };

  return (
    <Container fluid="sm">
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter username"
              ref={userEl}
              isInvalid={error}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordEl}
              isInvalid={error}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" ref={submitEl}>
          Sign In
        </Button>
      </Form>
    </Container>
  );
};
