const express = require('express')
const router = express.Router()
const app = express()

function pepeResponse(request, response) {
    res = req.query.user = 'pepe'?res.send('Servidor respondiendo a la petición de pepe'):res.send('Servidor respondiendo a la petición');
    return res;
    
    /*if (req.query.user = 'pepe') {      
        return res.send('Servidor respondiendo a la petición de pepe');
      }
      else{
        return res.send('Servidor respondiendo a la petición')
      }
      });*/
}