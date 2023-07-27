const express = require('express')
const router = express.Router()
// const controllerOFertas = require('../controllers/controllerOfertas')

router.get('/', (req, res)=>{
    res.render('auth')})

router.get('/create-offer', (req, res)=>{
    res.render('create-offer')})

router.get('/market', (req, res)=>{
    res.render('market')
})

router.get('/rewards', (req,res)=>{
    res.render('rewards')
})

// router.post('/', express.urlencoded({extended: true}), controllerOFertas.criarOferta)

module.exports = router