import mongoose from "mongoose";

const bondSchema = new mongoose.Schema({
    name: String,
    owner: String,
    price: Number
});

export default mongoose.model('Bond', bondSchema);