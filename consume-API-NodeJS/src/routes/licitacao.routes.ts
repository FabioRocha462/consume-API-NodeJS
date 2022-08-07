import { Router } from "express";
import { licitacaoController } from "../modules/licitacoes/licitacaoController";
import { getLicitacaoController } from "../modules/licitacoes/getLicitacaoController";

const LicitacaoController = new licitacaoController()
const GetLicitacaoController = new getLicitacaoController();

const licitacaoRoutes = Router();
licitacaoRoutes.post("/", LicitacaoController.handle);
licitacaoRoutes.get("/", GetLicitacaoController.handle);

export {licitacaoRoutes};