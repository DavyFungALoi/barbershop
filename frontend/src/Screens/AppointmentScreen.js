import React from "react";

import DatePicker from "../components/DatePicker.js";

import ConfirmAppointment from "../components/ConfirmAppointment.js";
import TimePicker from "../components/TimePicker.js";
import BarberPicker from "../components/BarberPicker.js";

const AppointmentScreen = () => {
  return (
    <>
      <div>Make An Appointment</div>
      <DatePicker></DatePicker>
      <TimePicker></TimePicker>
      <BarberPicker></BarberPicker>
      <ConfirmAppointment></ConfirmAppointment>
    </>
  );
};

export default AppointmentScreen;
