const express = require('express')
const appointments = require('../frontend/src/sampleAppointment')
const app = express()


app.get ('/', (req, res) => {
 res.send("hello there")
})

app.get ('/api/appointments', (req, res) => {
       res.json(appointments)
   
   })
   

app.listen(5000, console.log('Server running on port 5000'))