import {CreateClientDTO} from "../../dtos/CreateClientDTO";
import {prisma} from "../../../../prisma/client";
import { Client } from "@prisma/client";
import {AppError} from "../../../../errors/AppError";

export class CreateClientUseCase {

    async execute( { nome, email, documento }:CreateClientDTO ): Promise<Client>
    {
        const clientExists = await prisma.client.findUnique(
            {
                where: {
                    email
                }
            }
        );

        if (clientExists) {
            throw new AppError("Este email já foi usado para cadastro!");
        }

        const client = await prisma.client.create(
            {
                data: {
                    nome,
                    email,
                    documento
                }
            }
        );

        return client;
    }
}