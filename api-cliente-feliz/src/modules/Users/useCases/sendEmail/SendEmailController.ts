import {Request, Response} from "express";
import {SendEmailUseCase} from "./SendEmailUseCase";

export class SendEmailController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const sendEmailUseCase = new SendEmailUseCase();

        const result = sendEmailUseCase.execute({id});

        if (!result) {

            return res.status(500).json({
                'error': false,
                'message': 'Erro ao enviar o email'
            });
        } else {

            return res.status(200).json({
                'error': false,
                'message': 'Email enviado com sucesso'
            });
        }
    }
}