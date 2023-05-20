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

exports.updateUser =  function(id, data){
    let updateFields = '';
    const updateValues = [];
  
    if (data.email) {
      updateFields += 'email=?, ';
      updateValues.push(data.email);
    }
  
    if (data.username) {
      updateFields += 'username=?, ';
      updateValues.push(data.username);
    }
  
    // Remove a vírgula final dos campos de atualização
    updateFields = updateFields.slice(0, -2);
  
    const query = `UPDATE User SET ${updateFields} WHERE id=?`;
    updateValues.push(id);
  
    return database.execute(query, updateValues);
}

exports.deleteUser =  function(id){
    const query = `DELETE FROM User WHERE id=?`;
  
    return database.execute(query, [id]);
}