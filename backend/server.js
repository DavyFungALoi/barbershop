import express from 'express'
import dotenv from "dotenv"
import appointments from "./sampledata/sampleAppointment.js"
import connectDB from './config/db.js' 
import colors from 'colors'
import userRoutes from "./routes/userRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"
const app = express()

dotenv.config()
connectDB()
app.get ('/', (req, res) => {
 res.send("hello there")
})

const PORT = process.env.PORT || 5000

app.use(express.json()); ///enables json parsing in the body

app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(PORT, console.log(`'Server running in ${process.env.NODE_ENV} mode on port ${5000}'`))