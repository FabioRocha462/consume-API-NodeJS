import { Router } from "express";
import { datasController } from "../modules/datas/datasController";
const DatasController = new datasController()

const datasRoutes = Router();
datasRoutes.post("/", DatasController.handle);

export {datasRoutes};