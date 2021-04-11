import React from "react";
import {useSelector } from "react-redux";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
    </div>
  );
};

export default Header;
