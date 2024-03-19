import express from "express";

const router = express.Router();

import { newOrder ,myOrders } from "../controllers/orderControllers.js";
import {isAuthenticatedUser } from "../middlewares/auth.js"

router.route("/orders/new").post(isAuthenticatedUser , newOrder);
router.route("/me/orders").get( isAuthenticatedUser ,myOrders);


export default router;