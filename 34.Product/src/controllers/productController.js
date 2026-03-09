const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  const { search, sort } = req.query;

  let query = {};

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  let sortOption = {};
  if (sort === "asc") sortOption.price = 1;
  if (sort === "desc") sortOption.price = -1;

  const products = await Product.find(query)
    .populate("category")
    .sort(sortOption);

  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};