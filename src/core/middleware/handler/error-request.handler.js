const errorRequestHandler = (error, req, res, next) =>{
    if(error && error.statusCode == 400 && error.name == "BadRequestError"){
        return res.status(error.statusCode).send({
            type: "BadRequestError",
            statusCode: error.statusCode,
            notification: error.message
        })
    }

    if(error.name === "ValidationError"){
        return res.status(422).send({
            type: "ValidationError",
            statusCode: 422,
            notifcation: error.details
        })
    }



    if(error.name === "NotFoundError"){
        return res.status(404).send({
            type: "NotFoundError",
            statusCode: error.statusCode,
            notification: error.message
        })
    }

    console.log(error)

    return res.status(500).send("Something wrong!");    
}

module.exports = errorRequestHandler;