import { Router } from "express";
import authRouter from "./auth/index.js";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);

// apiRouter.use("/user", userRouter);

export default apiRouter;