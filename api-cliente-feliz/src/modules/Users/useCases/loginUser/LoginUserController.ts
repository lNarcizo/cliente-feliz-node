import {Request, Response} from "express";
import {LoginUserUseCase} from "./LoginUserUseCase";

export class LoginUserController {

    async handle(req: Request, res: Response)
    {
        const { email, senha } = req.body;

        const loginUserUseCase = new LoginUserUseCase();

        const result = await loginUserUseCase.execute({ email, senha });

        const resultData = {
            "authenticated": result
        }

        return res.status(200).json(resultData);

    }

}
