import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";


// Register user   =>  /api/v1/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user ,201 ,res);
});

// login user  =>  /api/v1/login

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password) 
  {
    return next(new ErrorHandler("Please enter email and password" ,400));
  }

  const user= await User.findOne({ email}).select("+password");
  if(!user)
  {
    return next(new ErrorHandler("Invalid email and password" ,400));
  }

  const isPasswordMatched= await user.comparePassword(password);

  if(!isPasswordMatched)
  {
    return next(new ErrorHandler("Invalid email and password" ,401));
  }
  // const token=user.getJwtToken();

  // res.status(201).json({
  //   token,
  // });

  sendToken(user ,200 ,res);
});

// Logout user   =>  /api/v1/logout
export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    message: "Logged Out",
  });
});

// Get current user profile  =>  /api/v1/me
export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req?.user?._id);

  res.status(200).json({
    user,
  });
});

// Update password  => api/v1/update 
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req?.user?._id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if(!isPasswordMatched)
  {
    return next(new ErrorHandler("Old Password is incorrect" ,400));
  }

  user.password=req.body.password;
  user.save();

  res.status(200).json({
    success: true,
  });
});

// Update User Profile(like name and email)  => api/v1/me/update
export const updateProfile = catchAsyncErrors(async (req, res, next) => {

  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  }

  const user = await User.findByIdAndUpdate(req.user._id ,newUserData ,{new : true});
  res.status(200).json({
    user,
  });
});