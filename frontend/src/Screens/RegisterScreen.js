import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../actions/userActions";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('test')
    dispatch(
      userRegister(
        name,
        email,
        password
      )
    );
  };

  return (
    <div className="Register__Container">
      <h2>Please Register</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="name"
          value={name}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          value={email}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          value={password}
        ></input>
        <button type="submit">
          Register
        </button>
      </form>
      <h3>Already have an Account?</h3>
      <a href="/login">
        <button>Login Now</button>
      </a>
    </div>
  );
};

export default RegisterScreen;
