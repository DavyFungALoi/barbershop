import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/userActions";
import { useHistory } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { logOutSuccess } = userLogin;

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    if (logOutSuccess) {
      history.push(`/`);
    }
  }, [history, logOutSuccess]);

  return (
    <div>
      Header
      <div>Contact</div>
      <div>About us</div>
      <div>Location</div>
      <div>Make Appointment</div>
      {userInfo ? (
        <a href="/users/profile">{userInfo.name}</a>
      ) : (
        <a href="/login">
          <button>Login Now</button>
        </a>
      )}
      <button onClick={() => logoutHandler()}>Log Out</button>
    </div>
  );
};

export default Header;
