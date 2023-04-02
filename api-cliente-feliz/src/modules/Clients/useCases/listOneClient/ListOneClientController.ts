import {Request, Response} from "express";
import {ListOneClientUseCase} from "./ListOneClientUseCase";

export class ListOneClientController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const listOneClientUseCase = new ListOneClientUseCase();

        const result = await listOneClientUseCase.execute({id});

        return res.status(200).json(result);
    }
}