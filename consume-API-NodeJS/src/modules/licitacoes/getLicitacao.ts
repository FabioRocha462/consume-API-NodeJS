import {Licitacao} from "@prisma/client";
import { prisma } from "../../prisma/client";
export class getLicitacao{
    async execute(): Promise<Licitacao[]> {
        const licitacoes = await prisma.licitacao.findMany({});
        return licitacoes;
    }
}