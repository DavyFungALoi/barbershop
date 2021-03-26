import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfirmAppointment = () => {
  const dispatch = useDispatch();
  const appointmentDetails = useSelector(
    (state) => state.addAppointmentDetails
  );
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { appointmentDate, timeSlot, barber } = appointmentDetails;
  const confirmHandler = () => {
    console.log("test");
  };
  return (
    <div>
      {`Your current appointment is ${appointmentDate}, ${timeSlot} with ${barber}`}
      <button onClick={() => {confirmHandler()}}>Confirm Appointment</button>
    </div>
  );
};

export default ConfirmAppointment;
