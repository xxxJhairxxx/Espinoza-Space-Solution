const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    )
    .messages({
      "string.pattern.base": "Correo Inválido",
    }),
  phone: Joi.string()
    .required()
    .pattern(new RegExp(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/i))
    .messages({
      "string.pattern.base": "Número de teléfono inválido",
    }),
  service: Joi.string().required(),
  message: Joi.string().allow(null, ""),
  captcha: Joi.string().required(),
});

module.exports = { schema };
