
const controllerOFertas = {

    criarOferta: function(req, res){

        const dadosOferta = req.body

        console.log(dadosOferta)
        res.end()
    }


}

module.exports = controllerOFertas