const userData = require("../../core/data/user.data");
const BadRequest = require("../../core/middleware/errors/bad-request");
const NotFound = require("../../core/middleware/errors/not-found");
const UserSchema = require("../schemas/user.schema");



exports.getUsers = async function(){
    const users = await userData.getUsers();
    return users[0];
}

exports.getUser = async function (id, username = ''){
    const idValid =  Number(id);

    const user = await userData.getUser(idValid);

    if(idValid < 1 || isNaN(idValid) ||  !Number.isInteger(idValid) ){
        throw new BadRequest();
    }

    if(user[0].length < 1){
        throw new NotFound();
    }

    return user[0][0];
                
}

exports.create = async function(user){
        
    const {error, value} = UserSchema.validate(user);
    if(error) throw error;

    return userData.createUser(user);
    
        
}

