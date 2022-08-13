import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import AlgoSectionArray from "./sortingSectionReading.js";
import StructureSectionArray from "./structureSectionReading.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username Required"],
      unique: true,
      validate: [validator.isAlphanumeric, "Invalid Username"],
      maxLength: [30, "Username must not exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Password Required "],
      minlength: [6, "Minimum password length is 6"],
    },
    gameStats: {
      points: { type: Number, required: true },
      responseTime: { type: Number, required: true },
      streak: { type: Number, required: true },
      numCorrect: { type: Number, required: true },
      numWrong: { type: Number, required: true },
      gamesPlayed: { type: Number, required: true },
      algoReading: [{}],
      dataReading: [{}],
    },
  },
  {
    collection: "users_algo",
    timestamps: true,
  },
);

userSchema.methods.signup = async function (email: string, password: string, username: string) {
  const existsEmail = await User.findOne({ email });
  const existsUsername = await User.findOne({ username });

  if (existsEmail) {
    throw Error("Email already in use");
  }

  if (existsUsername) {
    throw Error("Username unavailable");
  }

  const salt = await bcrypt.genSalt();

  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hash,
    username,
    points: 0,
    responseTime: 0,
    streak: 0,
    numCorrect: 0,
    numWrong: 0,
    gamesPlayed: 0,
    algoReading: AlgoSectionArray,
    dataReading: StructureSectionArray,
  });

  return user;
};

userSchema.methods.login = async function (email: string, password: string) {
  const user = await User.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Invalid password");
  }
  throw new Error("Account does not exist with provided email");
};

const User = mongoose.model("user", userSchema);

export default User;
