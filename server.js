import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { dbConnection } from "./src/config/dbConnection.js";
import userRoute from "./src/routes/userRoute.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
dotenv.config();

var corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:4000"],
  optionsSuccessStatus: 200,
};

//Database Connect
dbConnection();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "1024px" }));
app.use(cors(corsOptions));
app.use("/images", express.static(__dirname + "/public/images"));

//status api
app.get("/", (req, res) =>
  res.status(200).send("<h2>Server is running...</h2>")
);

//routes
app.use("/user", userRoute);
app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgYellowBright.bold(
      `Server is up and running on post ${process.env.PORT}`
    )
  );
});
