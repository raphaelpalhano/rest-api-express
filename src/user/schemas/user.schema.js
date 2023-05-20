const Joi = require('joi');

// use: https://joi.dev/api/?v=17.9.1

const CreateSchema = Joi.object({
    username: Joi.string().alphanum().min(4).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const UpdateSchema = Joi.object({
    username: Joi.string().alphanum().min(4).max(30).required().optional(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional()
})

module.exports = {CreateSchema, UpdateSchema};