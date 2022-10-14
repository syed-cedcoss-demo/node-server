import userModel from "../models/userModel.js";
import { adsMail } from "./mail.js";

export const cronJob = () => {
  // offer send email
  const mailReminder = async () => {
    const TIME = 1000 * 60 * 60 * 100; //100 hrs
    setInterval(async () => {
      console.log("time :", new Date()?.getSeconds());
      const users = await userModel.find({});
      for await (const user of users) {
        adsMail({
          email: user?.email,
          name: user?.username,
          url: "http://localhost:4000/panel/633fa8c3bd60f1d26d024c35/config/woocommerce",
        });
      }
      adsMail({});
    }, TIME);
  };
  mailReminder();

  // offer send email
  const otpReset = async () => {
    const TIME = 1000 * 60 * 2; //2 min
    setInterval(async () => {
      console.log("time :", new Date());
      // const newDD = new Date(new Date().getTime() + 2 * 60000);
      // console.log("newDD", newDD);
      const users = await userModel.updateMany(
        {
          createdAt: { $lte: new Date(new Date().getTime() - 2 * 60000) },
        },
        { $unset: { otp: 1 } }
      );
      console.log("users", users);
    }, 10000);
  };
  otpReset();
};
