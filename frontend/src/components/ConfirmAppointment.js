import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../actions/appointmentActions";

const ConfirmAppointment = () => {
  const dispatch = useDispatch();
  const appointmentDetails = useSelector(
    (state) => state.addAppointmentDetails
  );
  const createAppointmentSelector = useSelector((state) => state.createAppointment);
  const { success, error } = createAppointmentSelector;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { appointmentDate, timeSlot, barber } = appointmentDetails;
  const { barberName, barberId } = barber;

  const confirmHandler = () => {
    dispatch(
      createAppointment(userInfo._id, barberId, appointmentDate, timeSlot)
    );
  };

  return (
    <div>
      {`Your current appointment is ${appointmentDate}, ${timeSlot} with ${barberName}`}
      <button
        onClick={() => {
          confirmHandler();
        }}
      >
        Confirm Appointment
      </button>
      {success ? <div>Your appointment has been succesfully made</div> : <></>}
      {error ? (
        <div>
          That time and date is already taken with that barber, please select a
          different one.
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConfirmAppointment;

/*

*/
