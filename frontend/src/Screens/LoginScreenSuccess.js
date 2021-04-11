import React from "react";

import { useDispatch, useSelector } from "react-redux";

const LoginScreenSuccess = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { name } = userInfo;

  return (
    <div>
      <div>Welcome back {name}</div>
      <button>Make an Appointment</button>
      <button>Visit your profile</button>
      <button>Go Back to home</button>
    </div>
  );
};

export default LoginScreenSuccess;
