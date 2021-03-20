import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//@desc        Register a new User
//@route       POST /api/users/
//@access      Public

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
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc        Get an overview of all users
//@route       GET /api/users/
//@access      Public

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//@desc        Get an overview of all users that are barbers
//@route       GET /api/users/
//@access      Public

const getBarbers = asyncHandler(async (req, res) => {
  const barbers = await User.find({ isBarber: true });
  res.json(barbers);
});

//@desc        Authenticate a user
//@route       POST /api/users/login
//@access      Public

  const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});
    
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("No email or user found or invalid");
  }
});

export { registerUser, getUsers, getBarbers, authUser };
