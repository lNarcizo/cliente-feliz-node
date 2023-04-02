import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const LoginUserRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            email: Joi.string().email().required(),
            senha: Joi.string().required()
        }),
    },
    { abortEarly: false, messages },
);
