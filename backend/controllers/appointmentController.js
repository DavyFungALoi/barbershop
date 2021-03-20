import Appointment from "../models/appointmentModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const createAppointment = asyncHandler(async (req, res) => {
  const { user, date, timeSlot, barber } = req.body;
  const AppointmentExists = await Appointment.findOne({ date, timeSlot, barber });
  console.log(AppointmentExists)
  const isBarberCheck = await User.findOne({_id: barber, isBarber: true})
  console.log(isBarberCheck)


  if (!isBarberCheck) {
    res.status(400);
    throw new Error("A user without Barber priveleges is selected as barber")
  }
  if (AppointmentExists) {
    res.status(400);
    throw new Error("Timeslot is already taken with this barber");
  }

  const appointment = await Appointment.create({
    user,
    date,
    timeSlot,
    barber
  });
  if (appointment) {
    console.log("test");
    res.status(201).json({
      user: appointment.user,
      date: appointment.date,
      timeSlot: appointment.timeSlot,
      barber: appointment.barber,
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
