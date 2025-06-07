import express from 'express';
import User from '../models/userModel.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

// GET /admin/users - Only accessible to admin
router.get('/users', auth('admin'), async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

export default router;
