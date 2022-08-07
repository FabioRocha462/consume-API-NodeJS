import { Request, Response } from "express";
import {getDatas} from "./getDatas";

export class getDatasController {
    async handle(req: Request, res: Response){
        const Getdatas = new getDatas();
        const result = await Getdatas.execute();
        return res.status(200).json(result);
           
    }

    
}