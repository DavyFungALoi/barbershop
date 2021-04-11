import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
  let token;
 
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        token=req.headers.authorization.split(' ')[1] ///split the token at bearer with space where [1] is the token
        const decoded= jwt.verify(token, process.env.JWT_SECRET)
        req.user =  await User.findById(decoded.id).select('-password')
        console.log(req.user)
        next()
    } catch (error) {
        console.error(error)
        res.status(401)
        throw new Error ('Not Authorized, token failed')
        
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("not Authorized, no Token");
  }

  
});

export { protect};