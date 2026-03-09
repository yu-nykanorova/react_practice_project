import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string()
        .min(2)
        .pattern(/^[A-Za-z]+$/)
        .required()
        .messages({
            "string.min": "At least 2 characters",
            "string.pattern.base": "Only letters allowed",
        }),
    password: Joi.string()
        .min(8)
        .max(14)
        .required()
        .messages({
            "string.min": "At least 8 characters",
            'string.max': 'Too long, maximum 14 characters',
        }),
    age: Joi.number()
        .min(17)
        .max(120)
        .required()
        .messages({
            "number.min": "Age should be 18+",
            "number.max": "Age shouldn't be higher than 120",
        }),
});