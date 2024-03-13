import express from "express";
const router = express.Router();
import { registerUser ,loginUser, logout, getUserProfile} from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

router.route("/me").get( isAuthenticatedUser ,getUserProfile);
export default router;