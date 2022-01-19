import express from "express";
import {
  registerView,
  createComment,
  commentDelete,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiRouter.post("/commentDelete", commentDelete);

export default apiRouter;
