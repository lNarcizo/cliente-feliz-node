import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const ListOneClienteRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
