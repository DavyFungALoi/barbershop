import React from "react";
import { useEffect, useState } from "react";

const DatePicker = () => {
  const now = new Date();
  const daysInInitialMonthNow = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  const months = [
    { Month: "January", days: 31 },
    { Month: "February", days: 28 },
    { Month: "March", days: 31 },
    { Month: "April", days: 30 },
    { Month: "May", days: 31 },
    { Month: "June", days: 30 },
    { Month: "July", days: 31 },
    { Month: "August", days: 31 },
    { Month: "September", days: 30 },
    { Month: "October", days: 31 },
    { Month: "November", days: 30 },
    { Month: "December", days: 31 },
  ];
  const [selectedDate, setSelectedDate] = useState("No Date");
  const [dayArraySize, setdayArraySize] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState(daysInInitialMonthNow);

  const [fillCalendar, setFillCalendar] = useState({
    daysInCurrentMonth: daysInInitialMonthNow,
    currentMonth: [],
  });

  const checkCurrentMonth = () => {
    const d = new Date();
    setFillCalendar({ currentMonth: months[d.getMonth()].Month });
  };
  const createDays = (daysInMonth) => {
    let newdayArraySize = [];
    for (let i = 0; i < daysInMonth; i++) {
      newdayArraySize.push(+1);
    }

    setdayArraySize(newdayArraySize);
  };

  useEffect(() => {
    setFillCalendar({ daysInCurrentMonth: daysInInitialMonthNow });
    createDays(daysInMonth);
    checkCurrentMonth();
  }, [daysInMonth]);

  const selectDateHandler = (index) => {
    setSelectedDate(index);
  };

  const nextMonthHandler = () => {
    let newMonth = fillCalendar.currentMonth;
    const newMonthIndex = months.findIndex((x) => x.Month === newMonth) + 1;

    if (newMonthIndex > 11) {
      return;
    }
    const nextMonth = months[newMonthIndex];
    setFillCalendar({
      daysInCurrentMonth: nextMonth.days,
      currentMonth: nextMonth.Month,
    });
    createDays(nextMonth.days);
  };

  const previousMonthHandler = () => {
    let newMonth = fillCalendar.currentMonth;
    const newMonthIndex = months.findIndex((x) => x.Month === newMonth) - 1;

    if (newMonthIndex > 11) {
      return;
    }
    const previousMonth = months[newMonthIndex];
    setFillCalendar({
      daysInCurrentMonth: previousMonth.days,
      currentMonth: previousMonth.Month,
    });
    createDays(previousMonth.days);
  };

  const testhandler = () => {
    console.log("test");
  };

  return (
    <div>
      <h1>Pick your Date</h1>
      <div className="MonthOverview">
        <div>{fillCalendar.currentMonth}</div>
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
        {dayArraySize.map((day, index) => (
          <button key={index} onClick={() => selectDateHandler(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      <div>
        You currently have {selectedDate} in {fillCalendar.currentMonth}{" "}
        Selected
      </div>
      <button onClick={() => testhandler()}>Next Step</button>
    </div>
  );
};

export default DatePicker;
