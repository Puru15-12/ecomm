import catchAsyncErrors from "./catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

// Checks if user is authenticated or not
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  
  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }
  
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  req.user = await User.findById(decoded.id);
  // when we request to get the current user information by calling this middleware first, 
  //then in request(req) it store the user data with the help of user_id and that detail goes to next function(router.route("/me").get(getUserProfile);) 
  //and due to this informatiom stored in req ,getuserProfile succesfully displayed the user information;

  next();
});


// Authorize user roles
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};
