const mongoose = require('mongoose')

const docOferta = new mongoose.Schema({
    tipoOperacao: {type: String},
    codigoInsumo: {type: Number},
    descricaoSAP: {type: String},
    nomeComercial: {type: String},
    quantidadeInsumo: {type: Number},
    unidadeMedida: {type: String},
    observacao: {type: String},
    unidade: {type: String, default: 'Unidade A'},
    ofertaCriadaEm: {type: Date, default: Date.now},
    ofertaExpiraEm: {type: Date, default: Date.now + 10000},
    planejador: {type: String, default:'Danilo IDS'}


})

const Oferta =  mongoose.model('market', docOferta)

module.exports = Oferta;

// Posteriormente será necessário adicionar a versão da oferta, para evitar que ao mesmo tempo que uma pessoa compre/venda
// e outra edite a oferta, não venha colapsar. 