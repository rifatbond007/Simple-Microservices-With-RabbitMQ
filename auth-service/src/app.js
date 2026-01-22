const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/health", (req, res) => res.send("OK"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth service running on ${PORT}`));
