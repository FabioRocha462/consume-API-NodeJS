import { Router } from "express";
import { licitacaoController } from "../modules/licitacoes/licitacaoController";
const LicitacaoController = new licitacaoController()

const licitacaoRoutes = Router();
licitacaoRoutes.post("/", LicitacaoController.handle);

export {licitacaoRoutes};