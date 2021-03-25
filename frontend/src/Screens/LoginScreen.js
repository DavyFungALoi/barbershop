import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../actions/userActions";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("test");
    dispatch(userRegister(name, email, password));
  };
  return (
    <div className="Login__Container">
      <h2 class="Header">Please Login to Make an appointment </h2>
      <form>
        <label for="email">Email</label>
        <input type="text" id="email"></input>
        <label for="password">Password</label>
        <input type="text" id="password"></input>
        <button type="submit">Login</button>
      </form>
      <h3>Or Register a new account</h3>
      <a href="/register">
        <button>Register Now</button>
      </a>
    </div>
  );
};

export default LoginScreen;
