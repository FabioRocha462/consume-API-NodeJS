import { Request, Response } from "express";
import {getLicitacao} from "./getLicitacao";

export class getLicitacaoController {
    async handle(req: Request, res: Response){
        const GetLicitacao = new getLicitacao();
        const result = await GetLicitacao.execute();
        return res.status(200).json(result);
           
    }

    
}

