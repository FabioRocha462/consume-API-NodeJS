import { Request, Response } from "express";
import {createData} from "./createData";

export class datasController {
    async handle(req: Request, res: Response){
    
        const {data_licitacao,data_fonte,licitacaoId} = req.body;
        const CreateData = new createData();
        const result = await CreateData.execute({data_licitacao,data_fonte,licitacaoId})
        return res.status(201).json(result);
           
    }
}