import {
  ADD_APPOINTMENT_DETAIL_FAIL,
  ADD_APPOINTMENT_DETAIL_REQUEST,
  ADD_APPOINTMENT_DETAIL_DATE,
  ADD_APPOINTMENT_DETAIL_TIMESLOT,
  ADD_APPOINTMENT_DETAIL_BARBER,
} from "../constants/appointmentConstants";

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
