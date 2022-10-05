import chalk from "chalk";
import userModel from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../services/hash.js";
import { signJWT, verifyJWT } from "../services/jwt.js";

export const signup = async (req, res) => {
  try {
    //no validation
    let payload = req.body;
    const hashPass = await hashPassword(payload.password);
    payload = { ...payload, password: hashPass };
    console.log("req.body", payload);
    const user = await userModel.create(payload);
    const token = await signJWT({ id: user?._id });

    res.status(200).send({ token, _id: user?._id, email: user?.email });
  } catch (error) {
    console.log(chalk.bgRed.bold(error?.message));
    res.status(200).send(error?.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.status(200).send(user);
  } catch (error) {
    console.log("error", error);
    res.status(200).send(error?.message);
  }
};

export const test = async (req, res) => {
  try {
    // console.log("time", new Date());
    // const token = await signJWT({ name: "Syed Hasnain Mehadi" });
    // const isValid = await verifyJWT(token);
    // console.log("isValid", isValid);
    // console.log("time", new Date());
    // const save = await userModel.create({
    //   email: "syed@yopmail.com",
    //   name: "syed",
    //   gender: "Male",
    // });
    // console.log("save", save);
    // const pp = await hashPassword("test");
    // console.log("pp", pp);
    // const isValid = await verifyPassword("test", pp.toString());
    // console.log("isValid", isValid);
    res.status(200).send("route working");
  } catch (error) {
    console.log("error", error);
    res.status(200).send(error?.message);
  }
};
