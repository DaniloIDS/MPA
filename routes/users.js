const express = require('express')
const router = express.Router()
const controllerOFertas = require('../controllers/controllerOfertas')

const oferta = {
    operacao: 'adicionado',
    tipoOperacao: 'Venda',
    codigoInsumo: 3504998,
    descricaoSAP: 'Produto X',
    nomeComercial: 'Ritmo',
    quantidadeProduto: 100,
    unidadeMedida: 'KG',
    observacao: 'teste',
    unidade: 'Unidade A',
    ofertaCriadaEm: '01/08/2023',
    ofertaExpiraEm: '07/08/2023',
    planejador: 'Danilo IDS'
}




router.get('/', (req, res)=>{res.render('auth')})

router.get('/create-offer', (req, res)=>{res.render('create-offer')})

router.get('/market', controllerOFertas.obterTodasOfertas)

router.get('/rewards', (req,res)=>{res.render('rewards')})

router.get('/all', controllerOFertas.obterTodasOfertas)

router.get('/conf', (req,res)=>{res.render('conf', {oferta})})

router.post('/', express.urlencoded({extended: true}), controllerOFertas.criarOferta)

module.exports = router