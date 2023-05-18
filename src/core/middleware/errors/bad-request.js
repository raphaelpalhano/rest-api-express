class BadRequest extends Error {
    constructor(){
        super("request with invalid param or format!");
        this.name = "BadRequestError";
        this.statusCode = 400;
    }
}

module.exports = BadRequest;