import {ListOneClientDTO} from "../../dtos/ListOneClientDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Client} from "@prisma/client";

export class ListOneClientUseCase {

    async execute({ id }: ListOneClientDTO): Promise<Client>
    {
        const client = await prisma.client.findUnique(
            {
                where: {
                    id
                }
            }

        );

        if (!client) {
            throw new AppError("O usuario enviado nao existe!")
        }

        return client;
    }
}