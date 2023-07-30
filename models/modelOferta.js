const mongoose = require('mongoose')



const docOferta = new mongoose.Schema({
    tipoOperacao: {type: String},
    codigoInsumo: {type: Number},
    descricaoSAP: {type: String, default: 'Produto X'},
    nomeComercial: {type: String},
    quantidadeProduto: {type: Number},
    unidadeMedida: {type: String, default: 'KG'},
    observacao: {type: String},
    unidade: {type: String, default: 'Unidade A'},
    ofertaCriadaEm: {type: Date},
    ofertaExpiraEm: {type: Date},
    planejador: {type: String, default:'Danilo IDS'}

})

const Oferta =  mongoose.model('market', docOferta)


module.exports = Oferta;

// Posteriormente será necessário adicionar a versão da oferta, para evitar que ao mesmo tempo que uma pessoa compre/venda
// e outra edite a oferta, não venha colapsar. 

// unidade de medida e descricaoSAP deverão vir por "auto-preencher"

// unidade (empresa) e planejador deverão vir atrelados ao login cadastrado (assim que o sistema de login for implementado)