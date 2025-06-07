import Bond from '../models/bondModel.js';

export const getBond = async (req, res) => {
    const bonds = await Bond.find();
    res.json(users);
};

export const createBond = async (req, res) => {
    const newBond = new User(req.body);
    await newBond.save();
    res.status(201).json(newBond);
}