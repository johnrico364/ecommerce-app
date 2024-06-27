const Order = require("../models/orderSchema");

const buyProducts = async (req, res) => {
  const order = req.body;

  try {
    const data = await Order.create(order);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addCart = async (req, res) => {
  const order = req.body;

  try {
    const data = await Order.create(order);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const cancelOrder = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Order.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { buyProducts, addCart, cancelOrder };
