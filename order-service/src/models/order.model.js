const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const createOrder = async (id, userId, items, totalAmount) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(
      "INSERT INTO orders(id, user_id, status, total_amount) VALUES($1,$2,$3,$4)",
      [id, userId, "pending", totalAmount]
    );

    for (const item of items) {
      const orderItemId = uuidv4();
      await client.query(
        "INSERT INTO order_items(id, order_id, item_name, quantity) VALUES($1,$2,$3,$4)",
        [orderItemId, id, item.name, item.quantity]
      );
    }
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

module.exports = { createOrder };