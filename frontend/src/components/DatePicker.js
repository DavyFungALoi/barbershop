import React from "react";
import { useEffect, useState } from "react";
import { map } from "../sampleAppointment";

const DatePicker = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentMonth, setCurrentMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState("No Date");
  const [dayArray, setDayArray] = useState([]);

  const currentDate = new Date().toDateString();
  const populateCalendar = () => {
    createDays();
  };
  const MonthDuration = 31;
  const createDays = () => {
    let newDayArray = [];

    for (let i = 0; i < MonthDuration; i++) {
      newDayArray.push(+1);
    }
    setDayArray(newDayArray);
  };

  useEffect(() => {
    populateCalendar();
  }, []);

  const testhandler = () => {
    populateCalendar();
    console.log(dayArray);
  };

  const selectDateHandler = (index) => {
      setSelectedDate(index)
  };

  return (
    <div>
      <h1>Pick your Date</h1>
      <div className="MonthOverview">
        <div>{currentDate}</div>
        <div>Previous Month</div>
        <div>Next Month</div>
      </div>
      <div className="DayOverView">
        {dayArray.map((day, index) => (
          <button key={index} onClick={() => selectDateHandler(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      
      <div>You currently have {selectedDate} March Selected</div>
      <button onClick={testhandler}>Next Step</button>
    </div>
  );
};

export default DatePicker;

/*

  const DayOverview = document.querySelector(".DayOverView");
      const day_element = document.createElement("button");
      day_element.classList.add("day");
      day_element.innerHTML = i + 1;
      DayOverview.appendChild(day_element);
    }

*/
