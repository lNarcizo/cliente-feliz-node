import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const DeleteClienteRequest = celebrate(
    {
        [Segments.PARAMS]: Joi.object({
            id: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
