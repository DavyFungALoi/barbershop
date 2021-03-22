import React from "react";

import DatePicker from "../components/DatePicker.js";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAppointment from "../components/ConfirmAppointment.js";
import TimePicker from "../components/TimePicker.js";
import BarberPicker from "../components/BarberPicker.js";

const AppointmentScreen = () => {
  const appointmentDetails = useSelector(
    (state) => state.addAppointmentDetails
  );
  const { appointmentDate, timeSlot, barber } = appointmentDetails;
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
