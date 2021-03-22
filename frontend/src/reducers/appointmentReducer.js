import {
  ADD_APPOINTMENT_DETAIL_FAIL,
  ADD_APPOINTMENT_DETAIL_REQUEST,
  ADD_APPOINTMENT_DETAIL_DATE,
  ADD_APPOINTMENT_DETAIL_TIMESLOT,
  ADD_APPOINTMENT_DETAIL_BARBER,
} from "../constants/appointmentConstants";

export const addAppointmentDetailsReducer = (
  state = { appointmentDate: "", timeSlot: "" },
  action
) => {
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
