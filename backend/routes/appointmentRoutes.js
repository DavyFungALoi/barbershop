import express from "express"
const router = express.Router()
import {createAppointment, getAppointments}  from "../controllers/appointmentController.js"



router.route("/").post(createAppointment).get(getAppointments);



export default router;
