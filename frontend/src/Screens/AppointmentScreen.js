import React, { useEffect } from "react";

import DatePicker from "../components/DatePicker.js";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAppointment from "../components/ConfirmAppointment.js";
import TimePicker from "../components/TimePicker.js";
import BarberPicker from "../components/BarberPicker.js";
import { useHistory } from "react-router-dom";

const AppointmentScreen = () => {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const appointmentDetails = useSelector(
    (state) => state.addAppointmentDetails
  );
  const { appointmentDate, timeSlot, barber } = appointmentDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, history);

  return (
    <>
      <div>Make An Appointment</div>

      <DatePicker></DatePicker>
      {appointmentDate ? <TimePicker></TimePicker> : <div>Select A date</div>}
      {(appointmentDate, timeSlot ? <BarberPicker></BarberPicker> : <></>)}
      {
        (appointmentDate,
        timeSlot,
        barber ? <ConfirmAppointment></ConfirmAppointment> : <></>)
      }
    </>
  );
};

export default AppointmentScreen;
