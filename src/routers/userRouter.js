import express from "express";
import {
  logout,
  startGithubLogin,
  finishGithubLogin,
  getEdit,
  postEdit,
  see,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import {
  avatarUploadMiddleware,
  loginOnlyMiddleware,
  publicOnlyMiddleware,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", loginOnlyMiddleware, logout);
userRouter
  .route("/edit")
  .all(loginOnlyMiddleware)
  .get(getEdit)
  .post(avatarUploadMiddleware.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(loginOnlyMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
