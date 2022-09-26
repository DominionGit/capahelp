const joi = require("joi");

function registerValidation(data) {
  const schema = joi.object({
    // first name validation
    first_name: joi.string().min(2).required(),
    // last name validation
    last_name: joi.string().min(2).max(30).required(),
    // email  validation
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .min(8)
      .max(30)
      .required()
      .label("Password")
      .messages({
        "string.empty": ` password field cannot be empty `,
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "Minimum eight characters,at least one upper case,one lower case letter , one digit and  one special character,",
      }),
    phone: joi.string().alphanum().min(10).max(13).required(),
  });
  return schema.validate(data);
}

function loginValidation(data) {
  const schema = joi.object({
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),

    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .min(8)
      .max(30)
      .required()
      .label("Password")
      .messages({
        "string.empty": ` password field cannot be empty `,
        "object.regex": "Must have at least 8 characters",
        "string.pattern.base":
          "Minimum eight characters,at least one upper case,one lower case letter , one digit and  one special character,",
      }),
  });
  return schema.validate(data);
}
module.exports = {
  registerValidation,
  loginValidation,
};