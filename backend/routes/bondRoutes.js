import express from 'express';
import Bond from '../models/bondModel.js';
import User from '../models/userModel.js';
import { authenticate, authorizeRole } from '../middleware/authMiddleware.js';

const router = express.Router();

// 🔐 Client: Get own bond history
router.get('/mine', authenticate, async (req, res) => {
  try {
    const bonds = await Bond.find({ user: req.user.id }).populate('user', 'name email');
    res.json(bonds);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// 🔐 Admin: Create new bond
router.post('/admin', authenticate, authorizeRole('admin'), async (req, res) => {
  const { userName, totalBought, totalSold } = req.body;

  try {
    const user = await User.findOne({ name: userName });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const bond = new Bond({ user: user._id, totalBought, totalSold });
    await bond.save();

    res.status(201).json(bond);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// 🔐 Admin: Search bonds by username
router.get('/admin/search', authenticate, authorizeRole('admin'), async (req, res) => {
  const { name } = req.query;

  try {
    const user = await User.findOne({ name });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const bonds = await Bond.find({ user: user._id }).populate('user', 'name email');
    res.json(bonds);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// 🔐 Admin: Update bond
router.put('/admin/:id', authenticate, authorizeRole('admin'), async (req, res) => {
  const { totalBought, totalSold } = req.body;
  try {
    const bond = await Bond.findByIdAndUpdate(
      req.params.id,
      { totalBought, totalSold },
      { new: true }
    );
    if (!bond) return res.status(404).json({ msg: 'Bond not found' });

    res.json(bond);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// 🔐 Admin: Delete bond
router.delete('/admin/:id', authenticate, authorizeRole('admin'), async (req, res) => {
  try {
    const bond = await Bond.findByIdAndDelete(req.params.id);
    if (!bond) return res.status(404).json({ msg: 'Bond not found' });

    res.json({ msg: 'Bond deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

router.get('/admin/all', authenticate, authorizeRole('admin'), async (req, res) => {
  try {
    const bonds = await Bond.find().sort({ createdAt: -1 }).populate('user', 'name email');
    res.json(bonds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching all bonds' });
  }
});

export default router;
