import { Router } from "express";
import { createProduct } from "../controllers/products/createProduct";
import { getProducts } from "../controllers/products/getProducts";
import { getProductById } from "../controllers/products/getProductsById";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);

export default router;
