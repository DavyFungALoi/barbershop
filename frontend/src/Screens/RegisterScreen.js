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
  

  /*const submitHandler = (e) => {
    e.preventDefault()
    console.log("test");
  };
  */

  return (
    <div>
      <div>Please Register</div>
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
    </div>
  );
};

export default RegisterScreen;
