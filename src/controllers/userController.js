import userModel from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../services/hash.js";
import { signJWT, verifyJWT } from "../services/jwt.js";

export const signup = async (req, res) => {
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
