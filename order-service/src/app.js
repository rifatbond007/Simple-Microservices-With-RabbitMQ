const express = require("express");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/order.routes");
const RabbitMQ = require("./config/rabbitmq");

const app = express();
app.use(bodyParser.json());
app.use("/orders", orderRoutes);
app.use("/health", (req, res) => res.send("OK"));

const PORT = process.env.PORT || 4001;

RabbitMQ.connect()
  .then(() => app.listen(PORT, () => console.log(`Order service running on ${PORT}`)))
  .catch((err) => console.error("RabbitMQ connection failed", err));
