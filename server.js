// importa o express e do body-parser
const express = require('express')
const bodyParser = require('body-parser')

// inicializar o express
const app = express()

// configurar a view engine e a pasta public
app.set('view engine','ejs')
app.use(express.static('public'))

// configuração do body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// rotas
app.get("/",(req,res)=>{
    res.send("Vai ETIM!!!")
})

// configuração da porta
app.listen(3000)