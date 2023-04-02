import {Request, Response} from "express";
import {UpdateClientUseCase} from "./UpdateClientUseCase";

export class UpdateClientController {

    async handle(req: Request, res: Response)
    {
        const { id, nome, documento, email } = req.body;

        const updateClientUseCase = new UpdateClientUseCase();

        const result = await updateClientUseCase.execute({id, nome, documento, email});

        const resultData = {
            "updated" : true,
            "data": result
        }

        return  res.status(200).json(resultData);
    }
}
