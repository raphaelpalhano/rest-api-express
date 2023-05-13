const BadRequestError = require("../middleware/errors/bad-request-error");

class UserController {

    static getUsers(req, res){
        
        return res.status(200).send([ {
            "id": 1,
            "username": "Raphael",
            "email": "raphael23@gmail.com"
        }])
    }

    static getUser(req, res){


        const id =  Number(req.params.id) ;
        if(id < 1 || isNaN(id) ||  !Number.isInteger(id) ){
            throw new BadRequestError();
        }

        return res.status(200).send(users[id -1])
                 
    }

    static create(req, res){

        const {email, username, password} = req.body;
       return res.status(201).send({
            email: email,
            username: username,
            status: "CREATED"
        })
        
        
    }
}

module.exports = UserController;