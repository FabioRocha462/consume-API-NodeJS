import { Datas } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { createDatasdto } from "./createDatasdto";

export class createData {async execute({data_fonte,data_licitacao,licitacaoId}:createDatasdto): Promise<Datas>{
      data_fonte = new Date(data_fonte)
      data_licitacao = new Date(data_licitacao)
      const dates = await prisma.datas.create({
        data: {
            data_fonte,
            data_licitacao,
            licitacaoId,
        }
      });

        return dates;

    }
} 