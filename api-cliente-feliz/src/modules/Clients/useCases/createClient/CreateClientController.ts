import {Request, Response} from "express";
import {CreateClientUseCase} from "./CreateClientUseCase";

export class CreateClientController {

    async handle(req: Request, res: Response)
    {
        const { nome, email, documento } = req.body;

        const createClientUseCase = new CreateClientUseCase();

        const result = await createClientUseCase.execute({nome, email, documento});

        const resultData = {
            "created": true,
            "data": result
        }

        return res.status(201).json(resultData);
    }
}