import { Request, Response } from "express";
import {createLicitacao} from "./createLicitacao";

export class licitacaoController {
    async handle(req: Request, res: Response){
        const {orgao,titulo,estado,Cidade,objeto} = req.body;
        const CreateLicitacao = new createLicitacao();
        const result = await CreateLicitacao.execute({orgao,titulo,estado,Cidade,objeto})
        return res.status(201).json(result);
           
    }
}