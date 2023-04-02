import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const DeleteUserRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
