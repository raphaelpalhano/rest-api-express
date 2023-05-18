class NotFound extends Error {
    constructor(){
        super("Not Found data");
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}

module.exports = NotFound;