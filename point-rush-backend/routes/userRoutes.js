const express = require('express');
const router = express.Router();
const {
  addUser,
  getUsers,
  claimPoints,
  getLeaderboard,
  getUserHistory
} = require('../controllers/userController');

router.post('/users', addUser);
router.get('/users', getUsers);
router.post('/claim/:id', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history/:id', getUserHistory);

module.exports = router;
