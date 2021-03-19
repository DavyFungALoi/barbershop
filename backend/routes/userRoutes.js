import express from "express"
const router = express.Router()
import {registerUser, getUsers}  from "../controllers/userController.js"



router.route("/").post(registerUser).get(getUsers);



export default router;
