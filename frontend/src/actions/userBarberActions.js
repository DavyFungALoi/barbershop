import axios from "axios";
import {
  USER_BARBER_LIST_FAIL,
  USER_BARBER_LIST_REQUEST,
  USER_BARBER_LIST_SUCCESS,
} from "../constants/userBarberConstants";

//

export const userBarberList = () => async (dispatch) => {
  try {
    dispatch({ type: USER_BARBER_LIST_REQUEST });

    const { data } = await axios.get("/api/users/barbers");
    dispatch({ type: USER_BARBER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_BARBER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
