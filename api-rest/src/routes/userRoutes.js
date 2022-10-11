import { Router } from "express";
import userController from "../controllers/UserController";
import userLoginRequired from "../middlewares/userLoginRequired";
import adminLoginRequired from "../middlewares/adminLoginRequired";

const router = new Router();

//não deve existir pro usuário por segurança, a não ser que seja uma conta admin
router.get("/", adminLoginRequired, userController.index); //lista usuários
router.get("/:id", adminLoginRequired, userController.show); //lista usuário
router.delete("/:id", adminLoginRequired, userController.deleteAdmin);
router.put("/:id", adminLoginRequired, userController.updateAdmin);

//rotas reais pra um usuário não admin, que só pode alterar a sua conta
router.post("/", userController.create); //criar novo usuário
router.delete("/", userLoginRequired, userController.deleteUser); //deletar usuário
router.put("/", userLoginRequired, userController.updateUser); //update usuário

export default router;
