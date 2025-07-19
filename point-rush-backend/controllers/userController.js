const User = require('../models/User');
const History = require('../models/History');

// Add user
exports.addUser = async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  res.status(201).json(user);
};

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Claim random points
exports.claimPoints = async (req, res) => {
  const { id } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  await History.create({ userId: id, points });

  res.json({ message: 'Points claimed', points });
};

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

// Get user history
exports.getUserHistory = async (req, res) => {
  const { id } = req.params;
  const history = await History.find({ userId: id }).sort({ claimedAt: -1 });
  res.json(history);
};
