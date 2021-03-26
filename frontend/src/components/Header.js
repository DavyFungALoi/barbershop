import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/userActions";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  return (
    <div>
      Header
      <div>Contact</div>
      <div>About us</div>
      <div>Location</div>
      <div>Make Appointment</div>
      {userInfo ? (
        <a href="users/profile">{userInfo.name}</a>
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
