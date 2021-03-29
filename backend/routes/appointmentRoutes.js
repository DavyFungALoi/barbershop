import express from "express"
const router = express.Router()
import {createAppointment, getAppointments, getUserAppointments, getAppointmentbyId}  from "../controllers/appointmentController.js"



router.route("/").post(createAppointment).get(getAppointments);
router.route("/:id").get(getAppointmentbyId);




export default router;
