const errorRequestHandler = (error, req, res, next) =>{
    if(error && error.statusCode == 400 && error.name == "BadRequestError"){
        return res.status(error.statusCode).send({
            type: "BadRequestError",
            statusCode: error.statusCode,
            notification: error.message
        })
    }

    return res.status(500).send("Something wrong!");    
}

module.exports = errorRequestHandler;