import {
  ADD_APPOINTMENT_DETAIL_FAIL,
  ADD_APPOINTMENT_DETAIL_REQUEST,
  ADD_APPOINTMENT_DETAIL_DATE,
  ADD_APPOINTMENT_DETAIL_TIMESLOT,
  ADD_APPOINTMENT_DETAIL_BARBER,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_FAIL,
  GET_APPOINTMENT_DETAILS_REQUEST,
  GET_APPOINTMENT_DETAILS_SUCCESS,
  GET_APPOINTMENT_DETAILS_FAIL,
} from "../constants/appointmentConstants";

export const addAppointmentDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT_DETAIL_REQUEST:
      return { loading: true };
    case ADD_APPOINTMENT_DETAIL_DATE:
      return { ...state, appointmentDate: action.payload };
    case ADD_APPOINTMENT_DETAIL_TIMESLOT:
      return { ...state, timeSlot: action.payload };
    case ADD_APPOINTMENT_DETAIL_BARBER:
      return { ...state, barber: action.payload };
    case ADD_APPOINTMENT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return { loading: true };
    case CREATE_APPOINTMENT_SUCCESS:
      return { loading: false, success:true, data: action.payload };
    case CREATE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAppointmentDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APPOINTMENT_DETAILS_REQUEST:
      return { loading: true };
    case GET_APPOINTMENT_DETAILS_SUCCESS:
      return { loading: false, success:true, data: action.payload };
    case GET_APPOINTMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

