import { Router } from "express";
import { licitacaoRoutes } from "./licitacao.routes";

const routes = Router();

routes.use("/licitacao", licitacaoRoutes);

export {routes};