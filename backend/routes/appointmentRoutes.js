import express from "express"
const router = express.Router()
import {createAppointment, getAppointments, getUserAppointments}  from "../controllers/appointmentController.js"



router.route("/").post(createAppointment).get(getAppointments);
router.route("/:id").get(getUserAppointments);




export default router;
