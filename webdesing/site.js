const express = require("express")

const path = require("path")

const app = express()

const port = process.env.PORT || 8081

app.use(express.static(path.join(__dirname, '/www')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/www/landingpage.html'))
})

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(__dirname, '/www/catalogo'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/www/register.html'))
})

app.listen(port)
console.log("Aplicação rodando em 'http://localhost:"+port+"'")