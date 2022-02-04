import express from "express";
import {
  logout,
  startGithubLogin,
  finishGithubLogin,
  getEdit,
  postEdit,
  see,
} from "../controllers/userController";
import { loginOnlyMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", loginOnlyMiddleware, logout);
userRouter.route("/edit").all(loginOnlyMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware,startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware,finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
