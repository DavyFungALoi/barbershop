import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfirmAppointment = () => {
  const appointmentDetails = useSelector(
    (state) => state.addAppointmentDetails
  );
  const { appointmentDate, timeSlot, barber } = appointmentDetails;
  return (
    <div>
      {`Your current appointment is ${appointmentDate}, ${timeSlot} with ${barber}`} 
      <button>Confirm Appointment</button>
    </div>
  );
};

export default ConfirmAppointment;
