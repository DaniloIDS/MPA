require('dotenv').config()
const path = require('path')
const express = require('express')
// const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const app = express()
const PORTA = process.env.PORTA

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'templates'))

// app.use('/', express.static(path.join(__dirname, 'public')))
// app.use('/users', express.static(path.join(__dirname, 'public')))

// app.use('/users', userRoutes)

app.listen(PORTA, ()=>{`Servidor rodando na porta ${PORTA}`})

app.get('/', (req, res)=>{
    console.log('executou')
    res.send('hello world')
})

// mongoose.connect(process.env.DB_URL)
// const db = mongoose.connection

// db.once('open', ()=>{console.log(`Servidor conectado ao banco de dados!`)})
// db.on('error', (err)=>{console.log(`Erro na conexão com o banco de dados \n ${err}`)})