const Joi = require('joi');

// use: https://joi.dev/api/?v=17.9.1

const UserSchema = Joi.object({
    username: Joi.string().alphanum().min(4).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports = UserSchema;