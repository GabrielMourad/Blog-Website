import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createToken } from "../libs/jwt.js";
export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    //encrypting the password, then passing encrypted pwd as val for pwd property
    const pwdHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: pwdHash,
    });
    const savedUser = await newUser.save();
    const token = await createToken({ id: savedUser._id });
    res.cookie("token", token);
    // the response will return the following properties from the db
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const isValidPassword = await bcrypt.compare(password, userFound.password);
    if (!isValidPassword)
      return res.status(400).json({ message: "Incorrect Password" });
    const token = await createToken({ id: userFound._id });
    res.cookie("token", token);
    // the response will return the following properties from the db
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)
  if (!userFound) return res.status(400).json({message: "User not found"});
  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createAt: userFound.createdAt,
    updatedAt: userFound.updatedAt, 
  }) 
};  
  