const express = require("express");
const productRouter = express.Router();

const {
  getAllProducts,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById,
} = require("../controllers/productController");

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;
