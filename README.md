# 🛒 E-commerce Product API

This is a simple RESTful API for managing products in an e-commerce system, built using Node.js, Express, TypeScript, and Zod for validation. It supports reading, filtering, and creating product data from a mock database (`data/products.json`).

---

## 📌 Assumption

❗ Since no test data was provided in the instructions, I created sample product data (`data/products.json`) to complete the task. This can be replaced with real data later.

---

## 🚀 Tech Stack

- Node.js
- Express
- TypeScript
- Zod (for request validation)
- File System (used as a simple mock database)

---

## 📂 Folder Structure

```text
.
├── data/
│   └── products.json
│
├── src/
│   ├── controllers/
│   │   └── products/
│   │       ├── createProduct.ts
│   │       ├── getProducts.ts
│   │       └── getProductById.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   └── product.ts
│   │
│   ├── utilities/
│   │   └── validators.ts
│   │
│   └── app.ts
│
├── tsconfig.json
├── package.json
```
---

## ⚙️ How to Run the Project

```bash
# Clone the repo
git clone https://github.com/Don-christo/ecommerce.git
cd ecommerce

# Install dependencies
yarn install

# Compile TypeScript
yarn run build
yarn build:watch (in watch mode)

# Add your environmental variables
create `.env` file in the root directory and add the following:
PORT=3000

# Start the server
yarn dev (in development mode)
yarn start (in production mode)
```

## 🧪 API Endpoints

**GET /products**
- Fetch all products.

Optional query for **GET /products**:
- /products?category=Apparel — filter by category.

**GET /products/:id**
- Fetch a single product by ID.

POST /products
- Create a new product. Requires the following body:

```json
{
  "name": "New Shirt",
  "category": "Apparel",
  "price": 25.99
}
```

# 🧾 Sample curl Requests

✅ **_Get all products_**

```bash
curl http://localhost:3000/products
```

✅ **_Get products by category_**

```bash
curl http://localhost:3000/products?category=Apparel
```

✅ **_Get products by ID_**

```bash
curl http://localhost:3000/products/1
```

✅ **_Create a product_**
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Sneakers", "category": "Footwear", "price": 59.99}'
```

📝 **Notes**
- Products are stored in a simple JSON file `(data/products.json)`, mimicking a real database for the purpose of this test.
- IDs are auto-incremented on each product creation.
- Validation is handled using Zod.
