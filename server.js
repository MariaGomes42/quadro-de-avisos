// importa o express e do body-parser
const express = require('express')
const bodyParser = require('body-parser')

// importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')

// inicializar o express
const app = express()

// configurar a view engine e a pasta public
app.set('view engine','ejs')
app.use(express.static('public'))

app.locals.moment = require('moment')

// configuração do body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// rotas
app.use(routerAvisos)

// configuração da porta
app.listen(3000)
