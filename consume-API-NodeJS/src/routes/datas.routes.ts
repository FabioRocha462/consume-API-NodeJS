import { Router } from "express";
import { datasController } from "../modules/datas/datasController";
import { getDatasController } from "../modules/datas/getDatasController";
const DatasController = new datasController()
const GetDatasController = new getDatasController()

const datasRoutes = Router();
datasRoutes.post("/", DatasController.handle);
datasRoutes.get("/", GetDatasController.handle);
export {datasRoutes};