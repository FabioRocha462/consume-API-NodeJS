import {Licitacao} from "@prisma/client";
import { prisma } from "../../prisma/client";
import { createLicitacaodtos } from "./createLicitacaodtos";
export class createLicitacao {
    async execute({orgao,titulo,estado,Cidade,objeto}: createLicitacaodtos): Promise<Licitacao>{
        const liciti = await prisma.licitacao.create({
            data: {
                orgao,
                titulo,
                estado,
                Cidade,
                objeto
            }
        });
        return liciti;
    }
}