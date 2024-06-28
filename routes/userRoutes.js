const express = require('express');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
};

router.get('/dashboard', isAuthenticated, (req, res) => {
  res.json({ user: { username: req.session.username, email: req.session.email } });
});

module.exports = router;
