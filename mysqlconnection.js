const fs=require('fs');
// const env=process.env.ENVIRONMENT_TYPE;
const connectionData = fs.readFileSync('datebaseProperties.json');
const mysql = require('promise-mysql');

var getConnectionProp =()=>{    
    var connectionObj = JSON.parse(connectionData);
    // var connectProp = connectionObj[environment];
    return connectionObj;
}

var getConnection=()=>{
    var connectionObj = JSON.parse(connectionData);
    var connectProp = connectionObj[environment];
   return mysql.createConnection({
        host: connectProp.host,
        port : connectProp.port,
        user: connectProp.user,
        password: connectProp.password,
        database:connectProp.database,
        multipleStatements: true
    })

}
module.exports = {
    getConnectionProp,
    getConnection
    }