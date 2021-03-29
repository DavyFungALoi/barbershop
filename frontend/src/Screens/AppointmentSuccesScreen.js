import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAppointmentDetails } from "../actions/appointmentActions";

const AppointmentSuccesScreen = (match) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const AppointmentDetails = useSelector(
    (state) => state.getAppointmentDetails
  );
  const {error, succes, loading} = getAppointmentDetails

  useEffect(() => {
    dispatch(getAppointmentDetails(id));
  }, []);
  return <div>hello</div>;
};

export default AppointmentSuccesScreen;
