const express = require("express")

const path = require("path")

const app = express()

/*Define a porta onde a aplicação irá rodar*/
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/ex1', (req, res) => {
    res.sendFile(path.join(__dirname, 'webdesing/exercicio1/ex1.html'))
})

app.use(express.static(__dirname));

/*Inicia a aplicação*/
app.listen(port)
console.log("Aplicação rodando em 'http://localhost:"+port+"'")