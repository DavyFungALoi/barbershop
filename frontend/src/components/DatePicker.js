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

  const populateCalendar = () => {
    checkMonth();
    createDays();
  };
  const checkMonth = () => {
    const d = new Date();
    setCurrentMonth(months[d.getMonth()]);
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
    setSelectedDate(index);
  };

  const nextMonthHandler = () => {
    let newMonth = currentMonth;
    const newMonthIndex = months.indexOf(newMonth) + 1;
    if (newMonthIndex > 11) {
      return;
    }
    const nextMonth = months[newMonthIndex];
    setCurrentMonth(nextMonth);
  };

  const previousMonthHandler = () => {
    let newMonth = currentMonth;
    const newMonthIndex = months.indexOf(newMonth) - 1;
    if (newMonthIndex < 0) {
      return;
    }
    const previousMonth = months[newMonthIndex];
    setCurrentMonth(previousMonth);
  };

  return (
    <div>
      <h1>Pick your Date</h1>
      <div className="MonthOverview">
        <div>{currentMonth}</div>
        <div>
          Previous Month
          <button onClick={() => previousMonthHandler()}>Previous Month</button>
        </div>
        <div>
          Next Month
          <button onClick={() => nextMonthHandler()}>Next Month</button>
        </div>
      </div>
      <div className="DayOverView">
        {dayArray.map((day, index) => (
          <button key={index} onClick={() => selectDateHandler(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      <div>
        You currently have {selectedDate} in {currentMonth} Selected
      </div>
      <button onClick={checkMonth}>Next Step</button>
    </div>
  );
};

export default DatePicker;
