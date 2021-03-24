import React from "react";
import DatePicker from "../components/DatePicker";

const HomeScreen = () => {
  return (
    <div>
      Welcome to Barbershop
      <a href="#">
        <button>Make Appointment Online</button>
      </a>
      <div>Or</div>
      <a href="#">
        <button>Call us</button>
      </a>
    </div>
  );
};

export default HomeScreen;
