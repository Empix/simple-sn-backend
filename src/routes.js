const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
  return res.json({ ok: 200 });
});

router.get('/users', UserController.index);
router.post('/users', UserController.create);

module.exports = router;
