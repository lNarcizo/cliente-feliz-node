import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Client} from "@prisma/client";

export class ListClientUseCase {

    async execute(): Promise<Client[]>
    {
        const clients = await prisma.client.findMany();

        if (!clients) {
            throw new AppError("Não existem usuários cadastrados");
        }

        return clients;
    }
}