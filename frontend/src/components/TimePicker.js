import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAppointmentTimeSlot } from "../actions/appointmentActions.js";

const TimePicker = () => {
  const dispatch = useDispatch();
  const [slotsArray, setSlotsArray] = useState([]);
  const [currentTimeSlot, setCurrentTimeSlot] = useState(
    "Please Select a Timeslot"
  );
  function createSlots() {
    const slotConfig = {
      configSlotMinutes: "30",
      timeArr: [{ startTime: "09:00", endTime: "17:00" }],
    };

    // Getting values from slotConfig using destructuring
    const { configSlotMinutes, timeArr } = slotConfig;

    // This is the default date that we are using to make use of javascript date functions
    // slotsArray will hold final slots
    // _timeArrStartTime is used to store start time date object from the timeArr
    // _timeArrEndTime is used to store end time date object from the timeArr
    // _tempSlotStartTime is used to create slots by adding config values and check that the time is less than the end time and lies withing the duration specified
    // _startSlot holds value of start date time of slot
    // _endSlot holds value of end date time of slot

    let defaultDate = new Date().toISOString().substring(0, 10);
    let slotsArray = [];
    let _timeArrStartTime;
    let _timeArrEndTime;
    let _tempSlotStartTime;
    let _endSlot;
    let _startSlot;

    // Loop over timeArr
    for (var i = 0; i < timeArr.length; i++) {
      // Creating time stamp using time from timeArr and default date
      _timeArrStartTime = new Date(
        defaultDate + " " + timeArr[i].startTime
      ).getTime();
      _timeArrEndTime = new Date(
        defaultDate + " " + timeArr[i].endTime
      ).getTime();
      _tempSlotStartTime = _timeArrStartTime;

      // Loop around till _tempSlotStartTime is less end time from timeArr
      while (
        new Date(_tempSlotStartTime).getTime() <
        new Date(_timeArrEndTime).getTime()
      ) {
        _endSlot = new Date(_tempSlotStartTime);
        _startSlot = new Date(_tempSlotStartTime);
        _tempSlotStartTime = _endSlot.setMinutes(
          parseInt(_endSlot.getMinutes()) + parseInt(configSlotMinutes)
        );
        if (
          new Date(_tempSlotStartTime).getTime() <=
          new Date(_timeArrEndTime).getTime()
        ) {
          slotsArray.push({
            timeSlotStart: new Date(_startSlot).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }),
            timeSlotEnd: _endSlot.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }),
            timeSlotId: i++,
          });
        }
      }
    }

    setSlotsArray(slotsArray);
    return slotsArray;
  }

  useEffect(() => {
    createSlots();
  }, []);

  const timeSlotHandler = (timeslotStart, timeSlotEnd) => {
    setCurrentTimeSlot(`${timeslotStart} - ${timeSlotEnd}`);
  };

  const nextStepHandlerTimeSlot = () => {
    dispatch(addAppointmentTimeSlot(currentTimeSlot));
  };
  return (
    <div>
      {slotsArray.map((timeSlot) => (
        <div key={timeSlot.timeSlotId}>
          <button
            onClick={() =>
              timeSlotHandler(timeSlot.timeSlotStart, timeSlot.timeSlotEnd)
            }
          >
            {timeSlot.timeSlotStart} - {timeSlot.timeSlotEnd}
          </button>
        </div>
      ))}
      <div>Selected timeslot is {currentTimeSlot}</div>
      <button onClick={() => nextStepHandlerTimeSlot()}>Next Step</button>
    </div>
  );
};

export default TimePicker;
