import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userBarberList } from "../actions/userBarberActions.js";
import { addAppointmentBarber } from "../actions/appointmentActions.js";

const BarberPicker = () => {
  const dispatch = useDispatch();

  const barberList = useSelector((state) => state.userBarberList);
  const { loading: barberLoading, error: barberError, BarberInfo } = barberList;
  const [barberSelect, setBarberSelect] = useState("");

  useEffect(() => {
    dispatch(userBarberList());
  }, []);
  const barberHandler = (name) => {
    setBarberSelect(name);
  };

  const nextStepHandlerBarber = () => {
    dispatch(addAppointmentBarber(barberSelect));
  };
  return (
    <div>
      {barberLoading ? (
        <div>loading</div>
      ) : barberError ? (
        <div>Error</div>
      ) : (
        <>
          {BarberInfo &&
            BarberInfo.map((barber) => (
              <div key={barber._id}>
                <button onClick={() => barberHandler(barber.name)}>
                  {barber.name}
                </button>
              </div>
            ))}
        </>
      )}
      <div>Selected Barber is {barberSelect}</div>
      <button onClick={() => nextStepHandlerBarber()}>Final Step</button>
    </div>
  );
};

export default BarberPicker;
