const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const register = async (email, password) => {
  const existing = await User.findUserByEmail(email);
  if (existing) throw new Error("User exists");

  const hashed = await bcrypt.hash(password, 10);
  const id = uuidv4();
  await User.createUser(id, email, hashed);

  return { id, email };
};

const login = async (email, password) => {
  const user = await User.findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET || "secret", {
    expiresIn: "1h"
  });
  return { token };
};

module.exports = { register, login };
