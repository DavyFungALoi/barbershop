/*import Barber from "../models/barberModel.js";
import asyncHandler from "express-async-handler";


const registerBarber = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const barberExists = await barber.findOne({ email });
  
    if (barberExists) {
      res.status(400);
      throw new Error("Barber already exists with these details");
    }
    const Barber = await Barber.create({
      name,
      email,
      password,
    });
    if (barber) {
      res.status(201).json({
        _id: barber._id,
        name: barber.name,
        email: barber.email,
        isAdmin: barber.isAdmin
      });
    } else {
      res.status(400);
      throw new Error("Invalid Barber data");
    }
  });

 const getBarbers = asyncHandler(async (req, res) => {
    const Barbers = await Barber.find({})
    res.json(Barbers)
  });

  
 export {registerBarber, getBarbers} 
 */