import { Router } from "express";
import { licitacaoRoutes } from "./licitacao.routes";
import { datasRoutes } from "./datas.routes";

const routes = Router();

routes.use("/licitacao", licitacaoRoutes);
routes.use("/datas", datasRoutes);

export {routes};