import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  createAppointment,
  getAppointments,
  getMyAppointments,
  getAppointmentbyId,
} from "../controllers/appointmentController.js";

router.route("/").post(createAppointment).get(getAppointments);
router.route("/:id").get(getAppointmentbyId);
router.route("/myappointments").get(protect, getMyAppointments);

export default router;
