import {Request, Response} from "express";
import {ListClientUseCase} from "./ListClientUseCase";

export class ListClientController {

    async handle(req: Request, res: Response)
    {
        const listClientUseCase = new ListClientUseCase();

        const result = await listClientUseCase.execute();

        return res.status(200).json(result);
    }
}