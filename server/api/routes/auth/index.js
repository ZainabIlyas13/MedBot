
import express from "express";
import * as authController from "../../controller/auth/index.js";

const authRouter = express.Router();

authRouter.post("/sign-up", authController.register);
authRouter.post("/log-in", authController.login);

authRouter.get("/:id", authController.getAllMedbot);
authRouter.put("/:id", authController.putUpdateMedbot);

export default authRouter;
