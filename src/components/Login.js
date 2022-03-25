import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { authenticate } from "../services/login";
import { Container } from "react-bootstrap";

export const Login = ({ setCurrentUser = (f) => f }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authenticate(username, password);
      setError(false);
      setCurrentUser(response.data.token);
    } catch (err) {
      console.log(err);
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={error}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};
