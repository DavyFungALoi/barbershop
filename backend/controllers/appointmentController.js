import Appointment from "../models/appointmentModel.js";
import asyncHandler from "express-async-handler";

const createAppointment = asyncHandler(async (req, res) => {
  const { user, date, timeSlot } = req.body;
  const AppointmentExists = await Appointment.findOne({ date, timeSlot });

  if (AppointmentExists) {
    res.status(400);
    throw new Error("Timeslot is already taken");
  }

  const appointment = await Appointment.create({
    user,
    date,
    timeSlot,
  });
  if (appointment) {
    console.log("test");
    res.status(201).json({
      user: appointment.user,
      date: appointment.date,
      timeSlot: appointment.timeSlot,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Appointment data");
  }
});

const getAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({}).populate("user", "name");

  res.json(appointments);
});

export { createAppointment, getAppointments };

/*


  user: Appointment.user,
        date: Appointment.date,
        timeSlot: Appointment.timeSlot
 */

/*  STUFF TO CHECK FOR 2 CONDITIONS
kennel.exists({ name: "Rambo", age: "10" }, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
  }
});
 */
