import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import userLoginRequired from "../middlewares/userLoginRequired";

const router = new Router();

router.get("/", userLoginRequired, alunoController.index); //lista todos os alunos
router.get("/:id", userLoginRequired, alunoController.show); //lista aluno específico
router.post("/", userLoginRequired, alunoController.create); //criar aluno
router.put("/:id", userLoginRequired, alunoController.update); //update aluno
router.delete("/:id", userLoginRequired, alunoController.delete); //delete aluno

export default router;
