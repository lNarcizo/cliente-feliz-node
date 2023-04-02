import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {User} from "@prisma/client";
import {LoginUserDTO} from "../../dtos/LoginUserDTO";
const bcrypt = require("bcryptjs");
export class LoginUserUseCase {
    async execute( { email, senha }: LoginUserDTO ): Promise<boolean>
    {

        const userExists = await prisma.user.findUnique(
            {
                where: {
                    email
                }
            }
        );

        if (!userExists) {
            return false;
        }

        const result = await bcrypt.compareSync(senha, userExists.password);

        return result;
    }
}
