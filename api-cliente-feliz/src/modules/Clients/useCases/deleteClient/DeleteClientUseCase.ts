import {DeleteClientDTO} from "../../dtos/DeleteClientDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Client} from "@prisma/client";

export class DeleteClientUseCase {

    async execute({ id }: DeleteClientDTO): Promise<Client>
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

        const deletedClient = await prisma.client.delete(
            {
                where: {
                    id
                }
            }
        );

        return deletedClient;
    }
}