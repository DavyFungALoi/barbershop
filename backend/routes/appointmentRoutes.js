import express from "express";
const router = express.Router();
import {
  createAppointment,
  getAppointments,
  getMyAppointments,
  getAppointmentbyId,
  test,
} from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(createAppointment).get(getAppointments);
router.route("/myappointments").get(protect, getMyAppointments);
router.route("/:id").get(getAppointmentbyId);

export default router;
