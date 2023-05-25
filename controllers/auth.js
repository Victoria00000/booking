import UserModel from "../models/UserModel.js";

// create: POST //
export const register = async (req, res, next) => {
  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    res.status(200).json("User created successfully");
  } catch {
    next(error);
  }
};
