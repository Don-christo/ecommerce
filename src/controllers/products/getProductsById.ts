import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { Product } from "../../utilities/validators";

const dataPath = path.resolve(process.cwd(), "data/products.json");

export const getProductById = async (req: Request, res: Response) => {
  try {
    const file = await fs.readFile(dataPath, "utf-8");
    const products: Product[] = JSON.parse(file);

    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Get product by ID failed:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
