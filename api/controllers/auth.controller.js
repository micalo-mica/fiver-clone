import User from "../models/user.model.js";
import createError from "../middleware/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { activation, forgotToken } from "../utils/createToken.js";
import { validateEmail } from "../utils/validateEmail.js";
import { sendEmail } from "../utils/sendMails.js";

const { DOMAIN } = process.env;

// register
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // check fields
    if (!name || !email || !password)
      return next(createError(400, "Please fill in all fields."));

    // check email
    if (!validateEmail(email))
      return next(createError(400, "Please enter a valid email address."));

    //check user
    const userEmail = await User.findOne({ email });

    if (userEmail)
      return next(
        createError(400, "This email is already registered in our system.")
      );

    // check password
    if (password.length < 6)
      return next(createError(400, "Password must be at least 6 characters."));

    // hash password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // create token
    const user = { name, email, password: hashPassword };
    const activation_token = activation(user);

    // send email
    const url = `${DOMAIN}/activate?token=${activation_token}`;
    sendEmail({
      email,
      url,
      text: "Activate your account",
    });

    res.status(200).json({
      success: true,
      msg: `please check your email:- ${user.email} to activate your account!`,
    });
  } catch (error) {
    return next(createError(500, error.message));
  }
};

// activate user
export const activateUser = async (req, res, next) => {
  try {
    // get token
    const { activation_token } = req.body;

    // verify token
    const newUser = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN);

    if (!newUser) {
      return next(createError(400, "Invalid token"));
    }

    const { name, email, password } = newUser;

    // check if that user is already not available again
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return next(createError(400, "This email is already registered."));
    }

    // add user
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();

    res.status(200).json({
      success: true,
      msg: "User saved successfully",
    });
  } catch (error) {
    return next(createError(500, error.message));
  }
};

// logins
export const login = async (req, res, next) => {
  try {
    // get use credential
    const { email, password } = req.body;

    if (!email || !password) {
      return next(createError(400, "Please provide the all fields!"));
    }

    // check email in the db
    const user = await User.findOne({ email });

    if (!user)
      return next(
        createError(404, "This email is not registered in our system.")
      );

    // compare password
    const isCorrect = bcrypt.compareSync(password, user.password);

    if (!isCorrect)
      return next(createError(400, "Please provide the correct information!"));

    // sign jwt token to the user
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );

    const { DBPassword, ...info } = user._doc;

    // send cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        info,
        token,
      });
  } catch (error) {
    next(createError(500, error.message));
  }
};

export const logout = async (req, res) => {
  try {
    res
      .clearCookie("accessToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: "You have log out successful!",
      });
  } catch (error) {
    return next(createError(500, error.message));
  }
};

export const forgot = async (req, res) => {
  try {
    // get email
    const { email } = req.body;

    // check email db
    const user = await User.findOne({ email });
    if (!user)
      return next(createError(400, "Please provide the correct email!"));

    // create ac token
    const forgot_token = forgotToken({ id: user.id });

    // send email
    const url = `${DOMAIN}/resetPassword?token=${forgot_token}`;
    sendMail.sendEmail({
      email,
      url,
      text: "Reset your password",
    });

    // success

    res
      .status(200)
      .json({ success: true, msg: `please check your email:- ${user.email}` });
  } catch (error) {
    next(createError(500, "Something went wrong"));
  }
};

export const reset = async (req, res) => {
  try {
    // get password
    const { password } = req.body;

    // hash password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // update password
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { password: hashPassword }
    );

    // reset success
    res
      .status(200)
      .json({ success: true, msg: "Password was updated successfully." });
  } catch (error) {
    next(createError(500, "Something went wrong"));
  }
};
