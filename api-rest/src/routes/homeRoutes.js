import { Router } from "express";
import homeController from "../controllers/HomeController";

const router = new Router();

router.post("/", homeController.create);

export default router;
