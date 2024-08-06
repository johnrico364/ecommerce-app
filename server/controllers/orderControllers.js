const Order = require("../models/orderSchema");
const { param } = require("../routes/order");

const orderProduct = async (req, res) => {
  const orderForm = await req?.body;

  try {
    const orderExist = await Order.findOne({
      ordered_by: orderForm?.ordered_by,
      product_id: orderForm?.product_id,
      isCarted: true,
      isConfirmed: false,
      isDelivered: false,
    });

    if (orderExist && orderForm?.isCarted) {
      const newOrderForm = {
        quantity: orderExist?.quantity + orderForm?.quantity,
        payment: orderExist?.payment + orderForm?.payment,
      };
      const orderUpdate = await Order.findByIdAndUpdate(
        orderExist?._id,
        newOrderForm
      );

      res
        .status(200)
        .json({ error: "This order is already existing", response: "cart" });
    } else {
      const data = await Order.create({
        ...orderForm,
        isConfirmed: false,
        isDelivered: false,
      });

      res
        .status(200)
        .json({ mess: "Order created successfully", response: "product" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCart = async (req, res) => {
  console.log(req.params);
  // const ordered_by = req.params
  try {
    // const carts = await Order.find();
  } catch (error) {}
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

module.exports = { orderProduct, getAllCart, cancelOrder };
