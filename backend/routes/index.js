const express = require('express')
const router = express.Router()
const app = express()
const mysql = require('mysql')

module.exports = {
  createTable: createTable,
}

function createTable(req,res){ 
const connection = mysql.createConnection({
  user: 'packy',
  password: 'packy',
  host: '127.0.0.1',
  port: '3306',
  database : 'packy',
})

connection.query('CREATE TABLE users')
  res.send(console.log('base de datos creada con éxito'))
}

/*connection.query('USE users');

connection.query(
  'INSERT INTO usuario SET nombre = pepe, password = p',
  ['carlosro_ec', 'miclave']
);
 
connection.query(
    'SELECT * FROM usuario',
    function selectUsuario(err, results, fields) {
 
    if (err) {
        console.log("Error: " + err.message);
        throw err;
    }
 
    console.log("Number of rows: "+results.length);
    console.log(results);
 
    client.end();
});*/

/*connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
})
*/