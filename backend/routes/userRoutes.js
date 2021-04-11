import express from "express";
const router = express.Router();
import {
  registerUser,
  getUsers,
  getUserDetails,
  getUserById,
  getBarbers,
  authUser,
  getUsersTest,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(getUsers);
router.route("/barbers").get(getBarbers);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserDetails);
router.route("/:id").get(getUserById);
router.get("/test", getUsersTest);

export default router;
