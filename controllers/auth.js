import UserModel from "../models/UserModel.js";

// create: POST //
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
  } catch {
    next(error);
  }
};
