import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { productSchema, Product } from "../../utilities/validators";

const dataPath = path.resolve(process.cwd(), "data/products.json");

export const createProduct = async (req: Request, res: Response) => {
  try {
    const result = productSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        errors: result.error.issues,
      });
    }

    const newProduct = result.data;

    // Read existing file
    const file = await fs.readFile(dataPath, "utf-8");
    const products: Product[] = JSON.parse(file);

    // Assign new ID (auto-increment)
    const lastId = products.length ? products[products.length - 1]?.id ?? 0 : 0;
    const createdProduct = { ...newProduct, id: lastId + 1 };

    // Append and save
    products.push(createdProduct);
    await fs.writeFile(dataPath, JSON.stringify(products, null, 2));

    return res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Create product failed:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
