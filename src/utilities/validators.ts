import { z } from "zod";

export const productSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number().positive(),
});

export type Product = z.infer<typeof productSchema>;
