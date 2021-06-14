const express = require('express')
const app = express()
const path = require('path')
const { addAbortSignal } = require('stream')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res){

    let file = path.resolve("src", "contacto.html")

    res.sendFile(file)
})
app.listen(3000)