import {UpdateClientDTO} from "../../dtos/UpdateClientDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Client} from "@prisma/client";

export class UpdateClientUseCase {

    async execute({id, nome, documento, email}:UpdateClientDTO): Promise<Client>
    {
        const clientExists = await prisma.client.findFirst(
            {
                where: {
                    id
                }
            }
        );

        if (!clientExists) {
            throw new AppError("Usuário não existe");
        }

        const client = await prisma.client.update(
            {
                where: {
                    id
                },
                data: {
                    nome,
                    documento,
                    email
                },
            }
        );

        return client;
    }
}
