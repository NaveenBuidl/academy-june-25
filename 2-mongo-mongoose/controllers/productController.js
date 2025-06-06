const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const allProducts = await ProductModel.find();
  res.status(200).json(allProducts);
};

const getProductById = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  res.status(200).json(product);
};

const updateProductById = async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({ message: "Resources Updated" });
};

const createProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    isInStock,
    category,
    password,
    confirmPassword,
  } = req.body;
  try {
    const product = await ProductModel.create({
      product_name,
      product_price,
      isInStock,
      category,
      password,
      confirmPassword,
    });
    res.status(201).json({ message: "Product Created" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong", err });
  }
};

const deleteProductById = async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(201).json({ message: "Resource Deleted" });
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById,
};
