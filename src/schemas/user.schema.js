const Joi = require('joi');

// use: https://joi.dev/api/?v=17.9.1

const UserSchema = Joi.object({
    id: Joi.number(),
    username: Joi.string().alphanum().min(4).max(30).required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports = UserSchema;