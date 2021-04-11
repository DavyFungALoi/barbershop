import React from "react";

import { useDispatch, useSelector } from "react-redux";

const LoginScreenSuccess = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { name } = userInfo;

  return (
    <div>
      <div>Welcome {name}</div>
      <a href="/appointment">
        <button>Make an Appointment</button>
      </a>
      <a href="/users/profile">
        <button>Visit your profile</button>
      </a>
      <a href="/">
        <button>Go Back to home</button>
      </a>
    </div>
  );
};

export default LoginScreenSuccess;
