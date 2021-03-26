import React from "react";
import DatePicker from "../components/DatePicker";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div>
      Welcome to Barbershop
      {userInfo ? (
        <a href="/appointment">
          <button>Make Appointment Online</button>
        </a>
      ) : (
        <a href="/login">
          <button>Make Appointment Online</button>
        </a>
      )}
      <a href="/contact">
        <button>Call us</button>
      </a>
    </div>
  );
};

export default HomeScreen;
