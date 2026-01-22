const amqplib = require("amqplib");

const RABBIT_URL = process.env.RABBITMQ_URL || "amqp://rabbitmq";

const connect = async () => {
  const connection = await amqplib.connect(RABBIT_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue("orders");
  return channel;
};

module.exports = { connect };
