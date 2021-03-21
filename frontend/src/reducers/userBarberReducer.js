import { USER_BARBER_LIST_FAIL, USER_BARBER_LIST_REQUEST, USER_BARBER_LIST_SUCCESS } from "../constants/userBarberConstants";

export const userBarberListReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_BARBER_LIST_REQUEST:
        return { loading: true };
      case USER_BARBER_LIST_SUCCESS:
        return { loading: false, BarberInfo: action.payload };
      case USER_BARBER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };