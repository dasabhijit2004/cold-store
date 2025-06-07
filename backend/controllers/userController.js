import User from '../models/userModel.js';

export const getUser = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
}