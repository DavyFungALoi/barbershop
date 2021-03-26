import axios from "axios"
import {
  ADD_APPOINTMENT_DETAIL_FAIL,
  ADD_APPOINTMENT_DETAIL_REQUEST,
  ADD_APPOINTMENT_DETAIL_DATE,
  ADD_APPOINTMENT_DETAIL_TIMESLOT,
  ADD_APPOINTMENT_DETAIL_BARBER,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
} from "../constants/appointmentConstants";

///Adding to the Flow of Making an Appointment.

export const addAppointmentDetails = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_APPOINTMENT_DETAIL_DATE, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_APPOINTMENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addAppointmentTimeSlot = (data) => async (dispatch) => {
  try {
    
    dispatch({ type: ADD_APPOINTMENT_DETAIL_TIMESLOT, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_APPOINTMENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addAppointmentBarber = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_APPOINTMENT_DETAIL_BARBER, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_APPOINTMENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

///Creating a new appointment

export const createAppointment = (user, barber, date, timeSlot) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_APPOINTMENT_REQUEST });

    const { data } = await axios.post("/api/appointments", { user, barber, date, timeSlot });
    dispatch({ type: CREATE_APPOINTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_APPOINTMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};