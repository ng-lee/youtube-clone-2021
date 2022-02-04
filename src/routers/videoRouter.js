import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
import { loginOnlyMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(loginOnlyMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(loginOnlyMiddleware)
  .get(deleteVideo);
videoRouter
  .route("/upload")
  .all(loginOnlyMiddleware)
  .get(getUpload)
  .post(postUpload);

export default videoRouter;
