const { startConsumer } = require("./consumers/order.consumer");

startConsumer()
  .then(() => console.log("Notification service listening for orders"))
  .catch((err) => console.error(err));
