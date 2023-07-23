require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()


mongoose.connect(process.env.DB_URL)
const db = mongoose.connection

db.once('open', ()=>{console.log(`Servidor conectado ao banco de dados!`)})
db.on('error', (err)=>{console.log(`Erro na conexão com o banco de dados \n ${err}`)})


app.listen(process.env.PORTA, ()=>{console.log('Servidor rodando')})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', express.static(path.join(__dirname, '/styles')))
app.use('/', express.static(path.join(__dirname, '/assets')))

console.log(path.join(__dirname, 'templates'))
console.log(path.join(__dirname, '/styles'))

app.get('/', (req,res)=>{res.render('index')})