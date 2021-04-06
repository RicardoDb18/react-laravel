import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="register">
        <h3 className="d-flex justify-content-center">Registro</h3>
          <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Contrasena</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Repetir Contrasena</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Registrarme
            </Button>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Ya tienes cuenta?
                <Link to="/login">
                  {" "}
                  <a class="ml-2">Iniciar</a>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
