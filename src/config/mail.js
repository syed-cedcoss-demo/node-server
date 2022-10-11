import chalk from "chalk";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { signUp } from "../services/email.js";
dotenv.config();

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

export const registrationMail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: "Syed Hasnain Mehadi",
      to: data?.email,
      subject: "Than you for rergisration",
      text: "Successfully register",
      html: signUp(data),
    });
    console.log(chalk.bgYellowBright.bold("sent email id:", info.messageId));
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
  }
};
