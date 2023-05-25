import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

// registering: POST //
export const register = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

// login: POST //
export const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "Wrong password or username"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username"));

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
