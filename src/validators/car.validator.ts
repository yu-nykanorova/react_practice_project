import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .min(1)
        .max(20)
        .required()
        .messages({
            "string.pattern.base": "Only letters allowed",
            "string.min": "At least one character",
            "string.max": "20 characters maximum",
        }),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.min": "Sign price 0 or higher",
            "number.max": "1000000 is maximum",
        }),
    year: Joi.number()
        .min(0)
        .max(20)
        .required()
        .messages({
            "number.min": "Not earlier than 1990",
            "number.max": "Not later than 2026",
        }),
});