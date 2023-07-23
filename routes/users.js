const express = require('express')
const router = express.Router()

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

module.exports = router