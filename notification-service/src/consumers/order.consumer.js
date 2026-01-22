const { connect } = require("../config/rabbitmq");
const NotificationService = require("../services/notification.service");

const startConsumer = async () => {
  const channel = await connect();
  channel.consume("orders", async(msg) => {
    if (msg !== null) {
      const order = JSON.parse(msg.content.toString());
      await NotificationService.sendNotification(order); // call service
      console.log("Notification received:", order);
      channel.ack(msg);
    }
  });
};

module.exports = { startConsumer };
