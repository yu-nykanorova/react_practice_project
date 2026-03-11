import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .trim()
        .pattern(/^[A-Za-zА-Яа-яёЁіІїЇєЄҐґ]+$/)
        .max(20)
        .required()
        .messages({
            "string.empty": "Brand is required",
            "string.pattern.base": "Only letters allowed",
            "string.max": "20 characters maximum",
        }),
    price: Joi.number()
        .empty(NaN)
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "any.required": "Price is required",
            "number.min": "Sign price 0 or higher",
            "number.max": "1000000 is maximum",
        }),
    year: Joi.number()
        .empty(NaN)
        .min(1990)
        .max(2026)
        .required()
        .messages({
            "any.required": "Year is required",
            "number.min": "Not earlier than 1990",
            "number.max": "Not later than 2026",
        }),
});