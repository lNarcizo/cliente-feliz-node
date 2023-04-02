import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const CreateClienteRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            documento: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
