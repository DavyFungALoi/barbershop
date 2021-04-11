import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/userActions";

const UserDetailScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogout());
  };
  return <div>userDetails</div>;
};

export default UserDetailScreen;
