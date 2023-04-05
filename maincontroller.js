const mysql = require('promise-mysql');
const connProp = require('./mysqlconnection.js');
const fs=require('fs');
var connection;

var getEmpDetails =(req,res)=>{
    var connectionProp = connProp.getConnectionProp();
    mysql.createConnection({
        host: connectionProp.host,
        port : connectionProp.port,
        user: connectionProp.user,
        password: connectionProp.password
    }).then((conn)=>{
        connection = conn;
        console.log('connected to db')
        var query = "SELECT * FROM employee.employeDetails";
        var param=[];

        return connection.query(query,param);
    }).then((rows)=>{
        var response={
            statusCode:200,
            dataRows:rows
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
        connection.end();
    }).catch((err)=>{
        if (connection && connection.end) connection.end();
            res.send({message:err})
    })
}

module.exports={
    getEmpDetails
}