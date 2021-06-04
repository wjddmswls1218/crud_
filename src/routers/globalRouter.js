import express from "express";
import {
  homeController,
  createController,
  detailController,
  postCreteController,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeController);
globalRouter.get("/create", createController);
globalRouter.get("/detail", detailController);

globalRouter.post("/postCreate", postCreteController);
globalRouter.post("/postDetail");
export default globalRouter;
