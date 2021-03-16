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

  const currentDate = new Date().toDateString();
  const populateCalendar = () => {
    const DayOverview = document.querySelector(".DayOverView");
    DayOverview.innerHTML = "";
    createDays();
  };
  const MonthDuration = 31;
  const createDays = () => {
    for (let i = 0; i < MonthDuration; i++) {
      const DayOverview = document.querySelector(".DayOverView");
      const day_element = document.createElement("button");
      day_element.classList.add("day");
      day_element.innerHTML = i + 1;
      DayOverview.appendChild(day_element);
    }
  };

  useEffect(() => {
    populateCalendar();
    console.log(currentDate);
  }, []);

  return (
    <div>
      <h1>Pick your Date</h1>
      <div className="MonthOverview">
        <div>{currentDate}</div>
        <div>Previous Month</div>
        <div>Next Month</div>
      </div>
      <div className="DayOverView"></div>
      <div>You currently have {selectedDate} Selected</div>
    </div>
  );
};

export default DatePicker;
