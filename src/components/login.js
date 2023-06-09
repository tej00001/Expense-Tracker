import React from "react";
import classes from "./login.module.css";
import { Button, Form, Nav } from "react-bootstrap";
import { useState, useRef } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const emailInpurRef = useRef();
  const passwordInputRef = useRef();

  const FromSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailInpurRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail === "" || enteredPassword === "") {
      alert("Must fill both Email and Password");
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPoaT-0mC2-yFWGR52fJyNvc__l6fdMlI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          console.log("Login succesfullly");
          alert("Login succesful");
          history.replace("/showHandler");
        } else {
          return res.json().then((data) => {
            // console.log(data);
            let errorMessage = "Authrntication filed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <section className={classes.Look}>
      <h1>Login</h1>
      <Form onSubmit={FromSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "white" }}>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" ref={emailInpurRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "white" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </Form.Group>

        <div>
          <Button variant="success pl-2" type="submit">
            Sign in
          </Button>
          <Link style={{ color: "white", paddingLeft: "2rem" }}>
            forgot password?
          </Link>
        </div>
        <Nav>
          <NavLink to={"/"} style={{ color: "white", paddingTop: "1rem" }}>
            Don't have an Account?
          </NavLink>
        </Nav>
      </Form>
    </section>
  );
};

export default LoginPage;
