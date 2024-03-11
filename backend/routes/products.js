import express from "express";
import { getProducts } from "../controllers/productControllers.js";
import { newProduct } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);

export default router;