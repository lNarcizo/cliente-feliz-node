import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const UpdateClienteRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.string().required(),
            nome: Joi.string().required(),
            documento: Joi.string().required(),
            email: Joi.string().email().required(),
        }),
    },
    { abortEarly: false, messages },
);
