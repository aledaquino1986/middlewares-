const fs = require('fs');
const path = require('path');

const userLogsFilePath = path.join(__dirname, '../logs/userLogs.txt');


function userLogs (req, res, next) {
   
    fs.appendFileSync(userLogsFilePath, "Se ingresó en la página" +  req.url + "\n"); 
    next();
    }
    
    module.exports = userLogs;