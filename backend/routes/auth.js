import express from "express";
const router = express.Router();
import { registerUser ,loginUser, logout, getUserProfile, updatePassword, updateProfile} from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

router.route("/me").get( isAuthenticatedUser ,getUserProfile);
router.route("/me/update").put( isAuthenticatedUser ,updateProfile);

router.route("/update").put(isAuthenticatedUser , updatePassword);
export default router;