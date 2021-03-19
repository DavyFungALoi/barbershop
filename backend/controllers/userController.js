import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  });