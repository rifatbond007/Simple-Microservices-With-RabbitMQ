const OrderService = require("../services/order.service");

const createOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;
    const order = await OrderService.createOrder(userId, items);
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createOrder };
