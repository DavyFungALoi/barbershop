import express from "express";
const router = express.Router();
import {
  registerUser,
  getUsers,
  getUserDetails,
  getUserById,
  getBarbers,
  authUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(getUsers);
router.route("/barbers").get(getBarbers);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserDetails);
router.route("/:id").get(getUserById);

export default router;
