import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/userActions";
import { useHistory } from "react-router-dom";

const UserDetailScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { logOutSuccess } = userLogin;

  useEffect(() => {
    if (logOutSuccess) {
      history.push("/");
    }
  }, [history, logOutSuccess]);

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  return (
    <div>
      {userInfo ? (
        <div>
          <div>Welcome to your overview {userInfo.name}</div>
          <button onClick={() => logoutHandler()}>Log Out</button>
        </div>
      ) : (
        <div>please login</div>
      )}
    </div>
  );
};

export default UserDetailScreen;
