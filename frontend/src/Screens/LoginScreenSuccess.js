import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginScreenSuccess = () => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, history);

  return (
    <div>
      <div>Welcome {userInfo.name}</div>
      <a href="/appointment">
        <button>Make An Appointment</button>
      </a>
      <a href="/users/profile">
        <button>Visit your profile</button>
      </a>
      <a href="/">
        <button>Go back to Home</button>
      </a>
    </div>
  );
};

export default LoginScreenSuccess;
