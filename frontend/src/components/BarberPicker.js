import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userBarberList } from "../actions/userBarberActions.js";
import { addAppointmentBarber } from "../actions/appointmentActions.js";

const BarberPicker = () => {
  const dispatch = useDispatch();

  const barberList = useSelector((state) => state.userBarberList);
  const { loading: barberLoading, error: barberError, BarberInfo } = barberList;
  const [barberSelect, setBarberSelect] = useState({barberName: "", barberId:""});

  useEffect(() => {
    dispatch(userBarberList());
  }, []);
  const barberHandler = (name, id) => {
    setBarberSelect({barberName: name, barberId:id});
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
                <button onClick={() => barberHandler(barber.name, barber._id)}>
                  {barber.name}
                </button>
              </div>
            ))}
        </>
      )}
      <div>Selected Barber is {barberSelect.barberName}</div>
      <button onClick={() => nextStepHandlerBarber()}>Final Step</button>
    </div>
  );
};

export default BarberPicker;
