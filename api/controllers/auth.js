import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt"; // for hashing the password //
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// registering: POST //
export const register = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserModel({
      ...req.body,
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

    if (!user) return next(createError(404, "Wrong username"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};
