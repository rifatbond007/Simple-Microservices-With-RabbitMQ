const amqplib = require("amqplib");

const RABBIT_URL = process.env.RABBITMQ_URL || "amqp://rabbitmq";

let connection;
let channel;

const connect = async () => {
  connection = await amqplib.connect(RABBIT_URL);
  channel = await connection.createChannel();
  await channel.assertQueue("orders");
  return channel;
};

module.exports = { connect, getChannel: () => channel };
