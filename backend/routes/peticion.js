const express = require('express')
const router = express.Router()
const mysql = require('mysql')


module.exports = {
    peticion: peticion,
  }
  
  function peticion(req,res){ 
  /* const connection = mysql.createConnection({
    user: 'packy',
    password: 'packy',
    host: '127.0.0.1',
    port: '3306',
    database : 'packy',
  })
  
  connection.query('CREATE TABLE users')
    res.send(console.log('base de datos creada con éxito')) */
    res.send('todo va sobre ruedas')
  }