import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import connect from "../db";
import path from "path";
import globalRouter from "./routers/globalRouter";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/assets")));
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);
});
