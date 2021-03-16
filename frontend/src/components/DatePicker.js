import React from "react";
import { useEffect, useState } from "react";
import { map } from "../sampleAppointment";

const DatePicker = () => {
  const [dayArray, setDayArray] = useState([]);
  const MonthDuration = 31;
  const createDays = () => {
    for (let i = 0; i < MonthDuration; i++) {
      dayArray.push(i);
    }
  };

  
  useEffect(() => {
    createDays();
    console.log(dayArray);
  });

  return <div>
       <h1>Pick your Date</h1>
       <div className="MonthOverview">
        <div>Month</div>
        <div>Previous Month</div>
        <div>Next Month</div>
      </div>
      <div className="DayOverView">
        <div>{dayArray.map((day) => 
        <div key={day.toString()}>hello</div>
        )}</div>
      </div>

  </div>;
};

export default DatePicker;

/*
 {slotsArray.map((timeSlot) => (
        <div key={timeSlot.timeSlotId}>
          <button
            onClick={() =>
              TimeSlotHandler(timeSlot.timeSlotStart, timeSlot.timeSlotEnd)
            }
          >
            {timeSlot.timeSlotStart} - {timeSlot.timeSlotEnd}
          </button>
        </div>
*/
/*

 <h1>Pick your Date</h1>
      <div className="SelectedDate">Selected Date</div>
      <div className="MonthOverview">
        <div>Month</div>
        <div>Previous Month</div>
        <div>Next Month</div>
      </div>
      <div className="DayOverView">
        <div>{dayArray.map((day) => 
        <div key={day.toString()}>hello</div>
        )}</div>
      </div>
      )



 <div>
      <h1>Pick your Date</h1>
      <div className="SelectedDate">Selected Date</div>
      <div className="MonthOverview">
        <div>Month</div>
        <div>Previous Month</div>
        <div>Next Month</div>
      </div>
      <div className="DayOverView">
        <div>{dayArray.map((day) => console.log("hello"))}</div>
      </div>
      )
    </div>
*/
