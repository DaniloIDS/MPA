
const mongoose = require('mongoose')
const modelOferta = require('../models/modelOferta')

const controllerOFertas = {

    criarOferta: async function(req, res){

        const dadosOferta = req.body
        const dadosAdicionais = {
            ofertaCriadaEm: dataAtual(),
            ofertaExpiraEm: dataExpiracao(dataAtual) 
        }

        const oferta = Object.assign({}, dadosOferta, dadosAdicionais)

        try{
            const resultDoc = await new modelOferta(oferta).save()
            console.log(resultDoc)
        }catch(err){
            const msg = {msg: err}
            res.render('error', msg)
            // IMPLEMENTAR PÁGINA DE ERRO
        }
        
        res.redirect('/')

            // IMPLEMENTAR PÁGINA DE CONFIRMAÇAÕ NO MODELO
    },

    obterTodasOfertas: async function(req, res){
        const ofertas = await modelOferta.find({})
        
        try{
            res.render('market', {ofertas})
        }catch(err){
            res.send(err)
        }
    },

}

function dataAtual(){
    return new Date()
}

function dataExpiracao(dataAtual){

    const dataReferencia = dataAtual()

    const DIAS = 7
    const HORAS = 24
    const MINUTOS = 60
    const SEGUNDOS = 60
    const MILISEGUNDOS = 1000
    const DIAS_PARA_EXPIRACAO_OFERTA = DIAS * HORAS * MINUTOS * SEGUNDOS * MILISEGUNDOS

    return new Date(dataReferencia.getTime() + DIAS_PARA_EXPIRACAO_OFERTA)

}

module.exports = controllerOFertas