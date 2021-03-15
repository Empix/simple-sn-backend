const { create } = require('../models/User');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Incorrect fields!' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  },
};
