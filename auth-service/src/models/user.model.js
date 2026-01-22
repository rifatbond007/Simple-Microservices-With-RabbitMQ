const pool = require("../config/db");

const createUser = async (id, email, passwordHash) => {
  const query = "INSERT INTO users(id, email, password_hash) VALUES($1,$2,$3)";
  await pool.query(query, [id, email, passwordHash]);
};

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email=$1";
  const res = await pool.query(query, [email]);
  return res.rows[0];
};

module.exports = { createUser, findUserByEmail };
