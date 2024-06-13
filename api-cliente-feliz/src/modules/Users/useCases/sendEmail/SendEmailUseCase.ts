import nodemailer from "nodemailer";
import {SendEamilDTO} from "../../dtos/SendEamilDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
export class SendEmailUseCase {
    private transporter: nodemailer.Transporter;

    constructor() {

        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "",
                pass: "",
            }
        });
    }

    async execute({ id }: SendEamilDTO): Promise<boolean>
    {
        const user = await prisma.user.findUnique(
            {
                where: {
                    id
                }
            }
        );

        if (!user) {
            throw new AppError("O usuario enviado nao existe!")
        }

        const verificationLink = `http://localhost:3333/verify/${user.id}`;

        const mailOptions = {
            from: "lucaa646@gmail.com",
            to: user.email,
            subject: "Verifique sua conta",
            text: `Olá ${user.nome}! Clique neste link para verificar sua conta: ${verificationLink}`,
        };

        const info = await this.transporter.sendMail(mailOptions);

        if (!info) {
            throw new AppError(`Erro ao enviar e-mail`);
        }

        return info.accepted.length > 0;
    }
}
