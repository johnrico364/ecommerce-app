const Product = require("../models/productSchema");

const createProduct = async (req, res) => {
  const product = req.body;
  const productImage = req.file.filename;

  try {
    const data = await Product.create({ ...product, picture: productImage });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);

    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const newProduct = req.body;

  try {
    const data = await Product.findByIdAndUpdate(id, newProduct);

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Product.findByIdAndUpdate(id, { isDeleted: true });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const dataResetProduct = async (req, res) => {
  try {
    const data = await Product.deleteMany();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  dataResetProduct,
};
