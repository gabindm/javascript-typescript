import { Router } from "express";
import userLoginRequired from "../middlewares/userLoginRequired";

import fotoController from "../controllers/FotoController";

const router = new Router();

router.post("/", userLoginRequired, fotoController.store);

export default router;
