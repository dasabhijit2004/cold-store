import mongoose from 'mongoose';

const bondSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalBought: {
    type: Number,
    required: true,
  },
  totalSold: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Bond = mongoose.model('Bond', bondSchema);
export default Bond;
