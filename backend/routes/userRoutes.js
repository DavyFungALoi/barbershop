import express from "express"
const router = express.Router()
import {registerUser, getUsers, getBarbers}  from "../controllers/userController.js"



router.route("/").post(registerUser).get(getUsers);
router.route("/barbers").get(getBarbers);



export default router;
