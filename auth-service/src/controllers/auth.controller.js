const AuthService = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.register(email, password);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await AuthService.login(email, password);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login };
