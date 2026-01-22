const { getChannel } = require("../config/rabbitmq");

const publishOrderCreated = async (order) => {
  const channel = getChannel();
  if (!channel) throw new Error("RabbitMQ channel not ready");
  channel.sendToQueue("orders", Buffer.from(JSON.stringify(order)));
};

module.exports = { publishOrderCreated };
