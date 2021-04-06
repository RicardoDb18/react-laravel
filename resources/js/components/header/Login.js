import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import  { Link } from "react-router-dom";


export default function Login() {
 
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
    <div className="Login">
      <h3 className="d-flex justify-content-center">Iniciar Sesion</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Recuerdame
          </label>
        </div>
      </div>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <div className="mt-4">
					<div className="d-flex justify-content-center links">
					No tienes cuenta?<Link to="/register"> <a class="ml-2">Registrate</a></Link>
					</div>
					<div className="d-flex justify-content-center links">
						<a href="#">Olvidaste tu contrasena?</a>
					</div>
				</div>
      </Form>
    </div>
          </div>
          </div>

     
  );
}
