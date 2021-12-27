const dbConn = require('../../config/db.config');

//User object create
var User = function(user){
    this.name       = user.name;
    this.email      = user.email;
    this.password   = user.password;
    this.phone   = user.phone;
};
User.create = function (newUser, result) {    
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

User.findById = function (id, result) {
    dbConn.query("Select * from user where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

User.findAll = function (result) {
    dbConn.query("Select * from user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Users : ', res);  
            result(null, res);
        }
    });   
};

User.update = function(id, user, result){
  dbConn.query("UPDATE user SET name=?, email=?, password=?, phone=? WHERE id = ?", [user.name,user.email,user.password,user.phone,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

User.delete = function(id, result){
     dbConn.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};



module.exports= User;