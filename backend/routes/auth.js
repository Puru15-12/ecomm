import express from "express";
const router = express.Router();
import { registerUser ,loginUser, logout, getUserProfile, updatePassword, updateProfile, getAllUsers, getUserDetails, updateUser, deleteUser} from "../controllers/authControllers.js";
import { isAuthenticatedUser ,authorizeRoles} from "../middlewares/auth.js";


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

router.route("/me").get( isAuthenticatedUser ,getUserProfile);
router.route("/me/update").put( isAuthenticatedUser ,updateProfile);

router.route("/update").put(isAuthenticatedUser , updatePassword);

router.route("/admin/allusers").get( isAuthenticatedUser ,authorizeRoles("admin") , getAllUsers);
router.route("/admin/allusers/:id")
                .get( isAuthenticatedUser ,authorizeRoles("admin") , getUserDetails)
                .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
                .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);


export default router;