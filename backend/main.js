const express = require('express')
const router = express.Router()
const app = express()

//Consts
PORT = 8844
console.log(__dirname);



//Middlewares
app.use('/createTable', router);


//Routes
const { createTable } = require('./routes/index.js')
const { peticion } = require('./routes/peticion.js')
router.get('/', createTable)
router.get('/peticion', peticion)


app.get('/', (req, res) => {
  if (req.query.user = 'pepe') {      
    return res.send('Servidor respondiendo a la petición de pepe');
  }
  else{
    return res.send('Servidor respondiendo a la petición')
  }
  });
  
  app.listen(PORT, console.log ('Servidor escuchando por el puerto ' +PORT));