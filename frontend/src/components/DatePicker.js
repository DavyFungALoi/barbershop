import React from "react";
import { useEffect, useState } from "react";
import { map } from "../sampleAppointment";

const DatePicker = () => {
  ///Get the current Day/
  /*
  const now = new Date();
  const currentDaysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  */
  

  

  const now = new Date();
  const currentDaysInMonth = new Date(
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
  /// const [currentMonth, setCurrentMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState("No Date");
  const [dayArraySize, setdayArraySize] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState(currentDaysInMonth);

  const [fillCalendar, setFillCalendar] = useState({
    daysInMonth2: currentDaysInMonth,
    currentMonth: [],
  });

  const checkCurrentMonth = () => {
    const d = new Date();
    /// setCurrentMonth(months[d.getMonth()].Month);
    setFillCalendar({ currentMonth: months[d.getMonth()].Month });
  };
  const createDays = (daysInMonth) => {
    let newdayArraySize = [];
    for (let i = 0; i < daysInMonth; i++) {
      newdayArraySize.push(+1);
    }

    setdayArraySize(newdayArraySize);
  };

  const createTest = (daysInMonth) => {
    let newdayArraySizeTest = [];
    for (let i = 0; i < daysInMonth; i++) {
      newdayArraySizeTest.push(+1);
    }
    console.log(newdayArraySizeTest)
   
  };


  useEffect(() => {

    setFillCalendar({daysInMonth2: currentDaysInMonth})
    createDays(daysInMonth);
    checkCurrentMonth();
  }, [daysInMonth]);

  const selectDateHandler = (index) => {
    setSelectedDate(index);
  };

  const nextMonthHandler = () => {
    //   let newMonth = currentMonth;
    let newMonth = fillCalendar.currentMonth;
    const newMonthIndex = months.findIndex((x) => x.Month === newMonth) + 1;

    if (newMonthIndex > 11) {
      return;
    }
    const nextMonth = months[newMonthIndex];

    //   setCurrentMonth(nextMonth.Month);
    setFillCalendar({
      daysInMonth2: nextMonth.days,
      currentMonth: nextMonth.Month,
    });
    console.log(nextMonth.days);
    /// setDaysInMonth(nextMonth.days);
    /// setDaysInMonth(nextmonth);
  };

  /* const previousMonthHandler = () => {
    let newMonth = currentMonth;
    const newMonthIndex = months.findIndex((x) => x.Month === newMonth) + -1;
    if (newMonthIndex < 0) {
      return;
    }
    const previousMonth = months[newMonthIndex];
    setCurrentMonth(previousMonth.Month);
    //  setdayArraySize(previousMonth.days)
  };
  */
  const previousMonthHandler = () => {
    console.log("test");
  };

  const testhandler = () => {
    setFillCalendar({
      daysInMonth2: currentDaysInMonth
    })
    console.log(fillCalendar.daysInMonth2)
    
  };

  const testhandler2 = () => {
    createTest(fillCalendar.daysInMonth2)
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
      <button onClick={() => testhandler2()}>Test 2</button>
    </div>
  );
};

export default DatePicker;

/*
 let newMonth = currentMonth;
    months.findIndex(newMonth)
    const newMonthIndex = months.indexOf(newMonth) + 1;
    console.log(newMonthIndex)
    if (newMonthIndex > 11) {
      return;
    }
    const nextMonth = months[newMonthIndex];
    setCurrentMonth(nextMonth.Month);
*/
