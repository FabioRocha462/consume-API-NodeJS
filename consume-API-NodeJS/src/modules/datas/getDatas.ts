import {Datas} from "@prisma/client";
import { prisma } from "../../prisma/client";
export class getDatas{
    async execute(): Promise<Datas[]> {
        const data = await prisma.datas.findMany({});
        return data;
    }
}