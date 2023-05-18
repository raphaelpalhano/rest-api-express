const database = require('../infra/connection');

exports.getUsers = async function(){
    return database.query('SELECT * FROM User');
}

exports.getUser = async function(id){
    return database.execute('SELECT * FROM User WHERE id = ?', [id]);
}

exports.createUser =  function(user){
    return database.execute('INSERT INTO User (username, email) VALUES (?, ?)', [user.username, user.email]);
}

