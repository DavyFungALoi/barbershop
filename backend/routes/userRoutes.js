import express from "express"
const router = express.Router()
import {registerUser, getUsers, getBarbers, authUser}  from "../controllers/userController.js"
import {protect} from "../middleware/authMiddleware.js"



router.route("/").post(registerUser).get(getUsers);
router.route("/barbers").get(getBarbers);
router.route("/login").post(authUser)



export default router;
