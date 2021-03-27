import Appointment from "../models/appointmentModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const createAppointment = asyncHandler(async (req, res) => {
  const { user, date, timeSlot, barber } = req.body;
  const AppointmentExists = await Appointment.findOne({
    date,
    timeSlot,
    barber,
  });
  const isBarberCheck = await User.findOne({ _id: barber, isBarber: true });

  if (!isBarberCheck) {
    res.status(400);
    throw new Error("A user without Barber priveleges is selected as barber");
  }
  if (AppointmentExists) {
    res.status(400);
    throw new Error("Timeslot is already taken with this barber");
  }
  const appointment = await Appointment.create({
    user,
    date,
    timeSlot,
    barber,
  });
  if (appointment) {
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

/*const getUserAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({}).populate("user", "name");

  res.json(appointments);
  
});*/

/*const getUserAppointments = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user_.id);
  res.json(user);

  const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.user._id})
  res.json(orders)

  
});
});
req.params.id)
*/

const getUserAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ user: req.params.id });
  res.json(appointments);
});

export { createAppointment, getAppointments, getUserAppointments };
