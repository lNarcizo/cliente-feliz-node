import {Request, Response} from "express";
import {DeleteClientUseCase} from "./DeleteClientUseCase";

export class DeleteClientController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.params;

        console.log(id);

        const deleteClientController = new DeleteClientUseCase();

        const result = await deleteClientController.execute({id});

        const resultData = {
          "deleted" : true,
          "data": result
        };

        return res.status(200).json(resultData);
    }
}
