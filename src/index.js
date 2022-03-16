//Importar biblioteca Express
const express = require('express')
const bodyParser = require('body-parser')

//Para usar bibilioteca Express
const app = express()

//Para entender arquivos JSON  
app.use(bodyParser.json())

//Para o servidor entender/decodar quando parâmetros forem passados pela URL
app.use(bodyParser.urlencoded( {extended: false} ))

require('./controller/authController')(app)
require('./controller/projectController')(app)

app.listen(5000, () => {
    console.log(`${"Servidor Auth OK!"}`)
});