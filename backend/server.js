import express from 'express'
import dotenv from "dotenv"
import appointments from './sampleAppointment.js'
import connectDB from './config/db.js' 
import colors from 'colors'
const app = express()

dotenv.config()

connectDB()


app.get ('/', (req, res) => {
 res.send("hello there")
})

app.get ('/api/appointments', (req, res) => {
       res.json(appointments)
   
   })
 
  
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`'Server running in ${process.env.NODE_ENV} mode on port ${5000}'`))