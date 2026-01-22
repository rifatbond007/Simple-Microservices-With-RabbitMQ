const { v4: uuidv4 } = require("uuid");
const Order = require("../models/order.model");
const Publisher = require("./event.publisher");

const createOrder = async (userId, items) => {
  const id = uuidv4();
  const totalAmount = items.reduce((sum, item) => sum + item.quantity * (item.price || 10), 0);

  await Order.createOrder(id, userId, items, totalAmount);

  await Publisher.publishOrderCreated({ id, userId, items, totalAmount });
  return { id, totalAmount };
};

module.exports = { createOrder };
