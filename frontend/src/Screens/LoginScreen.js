import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions/userActions";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLoggedin = useSelector((state) => state.userLogin);
  const { success } = userLoggedin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  useEffect(() => {
    if (success) {
      history.push(`/login/success/`);
    }
  }, [history, success]);
  return (
    <div className="Login__Container">
      <h2 class="Header">Please Login to Make an appointment </h2>
      <form onSubmit={submitHandler}>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button type="submit">Login</button>
      </form>
      <h3>Or Register a new account</h3>
      <a href="/register">
        <button>Register Now</button>
      </a>
      {success ? <div>success</div> : <div>Select A kappa</div>}
    </div>
  );
};

export default LoginScreen;
