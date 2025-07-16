import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { Product } from "../../utilities/validators";

const dataPath = path.resolve(process.cwd(), "data/products.json");

export const getProducts = async (req: Request, res: Response) => {
  try {
    const file = await fs.readFile(dataPath, "utf-8");
    const products: Product[] = JSON.parse(file);

    // Optional filter by category
    const category = req.query.category as string;

    if (category) {
      const filtered = products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
      return res.status(200).json(filtered);
    }

    return res.status(200).json(products);
  } catch (error) {
    console.error("Get products failed:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
