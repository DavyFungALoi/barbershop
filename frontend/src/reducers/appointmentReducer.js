import {
  ADD_APPOINTMENT_DETAIL_FAIL,
  ADD_APPOINTMENT_DETAIL_REQUEST,
  ADD_APPOINTMENT_DETAIL_SUCCESS,
} from "../constants/appointmentConstants";

export const addAppointmentDetailsReducer = (
  state = { date: "", timeslot: "" },
  action
) => {
  switch (action.type) {
    case ADD_APPOINTMENT_DETAIL_REQUEST:
      return { loading: true };
    case ADD_APPOINTMENT_DETAIL_SUCCESS:
      return { loading: false, appointmentDate: action.payload };
    case ADD_APPOINTMENT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
