import { Button, Form, Nav } from "react-bootstrap";
import React, { useState, useRef } from "react";
import classes from "./Sinup.module.css";
import { NavLink } from "react-router-dom";

const SinupPage = () => {
  const emailInpurRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInpurRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmpassword = confirmpasswordInputRef.current.value;

    if (enteredPassword !== confirmpassword) {
      alert("Password and confirm password must match");
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPoaT-0mC2-yFWGR52fJyNvc__l6fdMlI",
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
          console.log("Account created succesfullly");
          alert("Account created succesful");
        } else {
          return res.json().then((data) => {
            // console.log(data);
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            alert(errorMessage);
          });
        }
      });
    }
    emailInpurRef.current.value = "";
    passwordInputRef.current.value = "";
    confirmpasswordInputRef.current.value = "";
  };

  return (
    <section className={classes.Look}>
      <h1>SignUp</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "white" }}>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            required
            ref={emailInpurRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "white" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            ref={passwordInputRef}
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label style={{ color: "white" }}>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            ref={confirmpasswordInputRef}
          />
        </Form.Group>

        <div>
          <Button variant="success pl-2" type="submit">
            Create Account
          </Button>{" "}
        </div>
        <Nav>
          {" "}
          <NavLink
            to={"/loginDetails"}
            style={{ color: "white", paddingTop: "1rem" }}
          >
            Have an Account?
          </NavLink>
        </Nav>
      </Form>
    </section>
  );
};
export default SinupPage;
